// LeetCode 1334. Find the City With the Smallest Number of Neighbors at a Threshold Distance
// Strategy: Run Dijkstra from EVERY city, count reachable cities within distanceThreshold
// YOUR CODE HERE - Write it yourself!
class MinHeap {
    constructor() { this.heap = []; }
    push(val) { this.heap.push(val); this.bubbleUp(); }
    pop() {
        if (this.size() === 1) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }
    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex][0] <= this.heap[index][0]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }
    bubbleDown() {
        let index = 0, length = this.heap.length;
        while (true) {
            let leftChild = 2 * index + 1, rightChild = 2 * index + 2, swap = null;
            if (leftChild < length && this.heap[leftChild][0] < this.heap[index][0]) swap = leftChild;
            if (rightChild < length && ((swap === null && this.heap[rightChild][0] < this.heap[index][0]) || (swap !== null && this.heap[rightChild][0] < this.heap[swap][0]))) swap = rightChild;
            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }
    size() { return this.heap.length; }
}
var findTheCity = function (n, edges, distanceThreshold) {
    let adj = Array.from({ length: n }, () => [])

    for (let [u, v, w] of edges) {
        adj[u].push([v, w])
        adj[v].push([u, w])
    }
    let minCount = 1e8;
    let result = -1;

    for (let i = 0; i < n; i++) {
        let dist = new Array(n).fill(Infinity)
        dist[i] = 0
        let pq = new MinHeap()
        pq.push([0, i])
        while (pq.size() > 0) {
            let [d, u] = pq.pop()
            if (d > dist[u]) continue;
            for (let [v, w] of adj[u]) {
                if (dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w
                    pq.push([dist[v], v])
                }
            }
        }

        // Count cities reachable within threshold from city i
        let count = 0
        for (let city = 0; city < n; city++) {
            if (city !== i && dist[city] <= distanceThreshold) count++
        }

        if (count <= minCount) {
            minCount = count
            result = i
        }
    }
    return result
}

// TEST CASES
const n1 = 4, edges1 = [[0, 1, 3], [1, 2, 1], [1, 3, 4], [2, 3, 1]], distanceThreshold1 = 4;
console.log("TEST 1 (Expected 3):", findTheCity(n1, edges1, distanceThreshold1));

const n2 = 5, edges2 = [[0, 1, 2], [0, 4, 8], [1, 2, 3], [1, 4, 2], [2, 3, 1], [3, 4, 1]], distanceThreshold2 = 2;
console.log("TEST 2 (Expected 0):", findTheCity(n2, edges2, distanceThreshold2));