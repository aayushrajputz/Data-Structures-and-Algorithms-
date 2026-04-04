/**
 * LeetCode 1514. Path with Maximum Probability
 * Using Shortest Path Dijkstra + Logarithmic Conversion Logic
 * 
 * Logic Decode: 
 * Maximize P1 * P2 * P3...
 * is equivalent to
 * Minimize -log(P1) - log(P2) - log(P3)...
 */
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
function maxProbability(n, edges, succProb, start, end) {
    let adj = Array.from({ length: n }, () => []);

    // 1. Convert edge list to adjacency list with Log-Weights
    for (let i = 0; i < edges.length; i++) {
        let [u, v] = edges[i];
        let weight = -Math.log(succProb[i]);
        adj[u].push([v, weight]);
        adj[v].push([u, weight]); // Undirected
    }

    let dist = new Array(n).fill(Infinity);
    dist[start] = 0.0;

    let pq = new MinHeap();
    pq.push([0.0, start]); // Format: [priority_value, node_id]

    while (pq.size() > 0) {
        let [currentLogDist, node] = pq.pop();

        if (currentLogDist > dist[node]) continue;

        if (adj[node]) {
            for (let [neighbor, weight] of adj[node]) {
                if (currentLogDist + weight < dist[neighbor]) {
                    dist[neighbor] = currentLogDist + weight;
                    pq.push([dist[neighbor], neighbor]);
                }
            }
        }
    }

    return dist[end] === Infinity ? 0.0 : Math.exp(-dist[end]);
}

// TEST CASES
const n1 = 3, edges1 = [[0, 1], [1, 2], [0, 2]], succProb1 = [0.5, 0.5, 0.2], start1 = 0, end1 = 2;
console.log("TEST 1 (Expected 0.25):", maxProbability(n1, edges1, succProb1, start1, end1));

const n2 = 3, edges2 = [[0, 1], [1, 2], [0, 2]], succProb2 = [0.5, 0.5, 0.3], start2 = 0, end2 = 2;
console.log("TEST 2 (Expected 0.3):", maxProbability(n2, edges2, succProb2, start2, end2));
