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
function spanningTree(V, adj) {
    let Sum = 0;
    let visited = Array(V + 1).fill(false);
    let pq = new MinHeap()
    pq.push([0, 1])
    while (pq.size() > 0) {
        let [w, u] = pq.pop()
        if (visited[u]) continue;
        visited[u] = true;
        Sum = Sum + w;
        for (let [v, w] of adj[u]) {
            if (!visited[v]) {
                pq.push([w, v])
            }
        }
    }
    return Sum;
}

const V = 3;
const adj = [
    [], // Node 0
    [[2, 5], [3, 1]], // Node 1: edges to 2(w=5), 3(w=1)
    [[1, 5], [3, 3]], // Node 2: edges to 1(w=5), 3(w=3)
    [[1, 1], [2, 3]]  // Node 3: edges to 1(w=1), 2(w=3)
];

console.log("MST Weight:", spanningTree(V, adj)); 
