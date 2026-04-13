/**
 * MISSION: Number of Ways to Arrive at Destination
 * TARGET: LeetCode 1976 🛡️
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

var countPaths = function (n, roads) {
    const MOD = 1000000007n;
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v, time] of roads) {
        adj[u].push([v, BigInt(time)]);
        adj[v].push([u, BigInt(time)]);
    }

    const dist = new Array(n).fill(BigInt(Number.MAX_SAFE_INTEGER) * 1000000n);
    const ways = new BigInt64Array(n).fill(0n);

    dist[0] = 0n;
    ways[0] = 1n;

    const pq = new MinHeap();
    pq.push([0n, 0]); // [time, node]

    while (pq.size() > 0) {
        const [d, u] = pq.pop();

        if (d > dist[u]) continue;

        for (const [v, time] of adj[u]) {
            const newDist = d + time;
            if (newDist < dist[v]) {
                dist[v] = newDist;
                ways[v] = ways[u];
                pq.push([newDist, v]);
            } else if (newDist === dist[v]) {
                ways[v] = (ways[v] + ways[u]) % MOD;
            }
        }
    }

    return Number(ways[n - 1] % MOD);
};

// n = 12 test case logic verified locally.
