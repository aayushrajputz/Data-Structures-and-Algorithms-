/**
 * MISSION: Dijkstra's Algorithm (Shortest Path in Weighted Graph)
 * STRATEGY: Greedy + Min-Heap (Priority Queue) 🏎️💨
 * TARGET: LeetCode 743 / GFG 🛡️
 * 
 * WHY DIJKSTRA? 
 * Think of Google Maps. BFS only works when all road distances are equal (weight = 1).
 * Dijkstra works when weights are different. It ALWAYS picks the shortest known path first.
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

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
        let index = 0;
        const length = this.heap.length;
        while (true) {
            let leftChild = 2 * index + 1;
            let rightChild = 2 * index + 2;
            let swap = null;

            if (leftChild < length) {
                if (this.heap[leftChild][0] < this.heap[index][0]) {
                    swap = leftChild;
                }
            }

            if (rightChild < length) {
                if (
                    (swap === null && this.heap[rightChild][0] < this.heap[index][0]) ||
                    (swap !== null && this.heap[rightChild][0] < this.heap[swap][0])
                ) {
                    swap = rightChild;
                }
            }

            if (swap === null) break;
            [this.heap[index], this.heap[swap]] = [this.heap[swap], this.heap[index]];
            index = swap;
        }
    }

    size() {
        return this.heap.length;
    }
}

function dijkstra(V, adj, S) {
    // 1. Initialize Distance Array with Infinity
    let dist = new Array(V).fill(Infinity);
    dist[S] = 0;

    // 2. Priority Queue to store [distance, node]
    let pq = new MinHeap();
    pq.push([0, S]);

    while (pq.size() > 0) {
        let [d, u] = pq.pop();

        // If we already found a shorter path, skip
        if (d > dist[u]) continue;

        // 3. Relax neighbors
        for (let [v, weight] of adj[u]) {
            if (dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push([dist[v], v]);
            }
        }
    }

    return dist;
}

// --- TEST DRIVE (TITAN MODE) ---
// Graph with 6 nodes
let V = 6;
let adj = Array.from({ length: V }, () => []);

// [to, weight]
adj[0].push([1, 4], [2, 4]);
adj[1].push([2, 2]);
adj[2].push([3, 3], [4, 1], [5, 6]);
adj[3].push([2, 3], [5, 2]);
adj[4].push([5, 3]);

let source = 0;
let result = dijkstra(V, adj, source);

console.log(`Shortest Paths from Source ${source}:`);
result.forEach((d, i) => console.log(`Node ${i}: ${d}`));

/**
 * LOGIC CHECK:
 * Path to 5: 
 * 0 -> 2 -> 4 -> 5 = 4 + 1 + 3 = 8
 * 0 -> 2 -> 3 -> 5 = 4 + 3 + 2 = 9
 * Result for Node 5 should be 8. 🎯
 */
