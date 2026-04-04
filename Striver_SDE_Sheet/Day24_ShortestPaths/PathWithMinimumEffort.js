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

/**
 * MISSION: Path With Minimum Effort (Dijkstra on 2D Grid)
 * TARGET: LeetCode 1631 🏔️
 * 
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
    let rows = heights.length;
    let cols = heights[0].length;

    // 1. DISTANCE MATRIX 
    // Instead of a 1D dist array, we need a 2D dist matrix initialized to Infinity.
    // (Hint: Array.from({length: rows}, () => new Array(cols).fill(Infinity)))

    // 2. PRIORITY QUEUE SETUP
    // pq format: [current_effort, r, c]
    let pq = new MinHeap();

    // 3. DIRECTIONS (Up, Right, Down, Left)
    let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    let dist = Array.from({ length: rows }, () => new Array(cols).fill(Infinity))

    dist[0][0] = 0;
    pq.push([0, 0, 0])

    while (pq.size() > 0) {
        let [eff, r, c] = pq.pop();
        if (r == rows - 1 && c == cols - 1) return eff;
        if (dist[r][c] < eff) continue;

        for (let [dr, dc] of directions) {
            let nr = r + dr
            let nc = c + dc
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
                let newEff = Math.abs(heights[nr][nc] - heights[r][c])

                let pathEff = Math.max(eff, newEff)
                if (pathEff < dist[nr][nc]) {
                    dist[nr][nc] = pathEff;
                    pq.push([pathEff, nr, nc])
                }

            }
        }


    }
    return 0
};
/* 
 * target_file: c:\Users\aayus\OneDrive\Desktop\DSA\Striver_SDE_Sheet\Day24_ShortestPaths\PathWithMinimumEffort.js 
 */

// --- TEST CASES ---
const heights1 = [[1, 2, 2], [3, 8, 2], [5, 3, 5]];
console.log("TEST 1 (Expected 2):", minimumEffortPath(heights1));

const heights2 = [[1, 2, 3], [3, 8, 4], [5, 3, 5]];
console.log("TEST 2 (Expected 1):", minimumEffortPath(heights2));
