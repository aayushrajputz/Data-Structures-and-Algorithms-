/**
 * MISSION: K-th Largest Element in a Stream (SCRATCH IMPLEMENTATION)
 * STRATEGY: Min-Heap of size K built using arrays 🛡️
 * TARGET: LeetCode #703 / Striver Miscellaneous 🔥
 */

var KthLargest = function (k, nums) {
    this.k = k;
    this.heap = [];

    for (let n of nums) {
        this.add(n);
    }
};

KthLargest.prototype.add = function (val) {
    if (this.heap.length < this.k) {
        this.pushHeap(val);
    } else if (val > this.heap[0]) {
        this.popHeap();
        this.pushHeap(val);
    }
    return this.heap[0];
};

// --- MANUAL MIN-HEAP HELPERS ---

KthLargest.prototype.pushHeap = function (val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
        let p = (i - 1) >> 1;
        if (this.heap[i] < this.heap[p]) {
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            i = p;
        } else break;
    }
};

KthLargest.prototype.popHeap = function () {
    const last = this.heap.pop();
    if (this.heap.length > 0) {
        this.heap[0] = last;
        let i = 0;
        while (true) {
            let l = 2 * i + 1, r = 2 * i + 2, small = i;
            if (l < this.heap.length && this.heap[l] < this.heap[small]) small = l;
            if (r < this.heap.length && this.heap[r] < this.heap[small]) small = r;
            if (small !== i) {
                [this.heap[i], this.heap[small]] = [this.heap[small], this.heap[i]];
                i = small;
            } else break;
        }
    }
};


// --- BATTLE TEST ---
let k = 3;
let nums = [4, 5, 8, 2];
let kthLargest = new KthLargest(k, nums);

console.log("Adding 3:", kthLargest.add(3)); // Returns 4 (Heap: [4, 5, 8])
console.log("Adding 5:", kthLargest.add(5)); // Returns 5 (Heap: [5, 5, 8])
console.log("Adding 10:", kthLargest.add(10)); // Returns 5 (Heap: [5, 10, 8])
console.log("Adding 9:", kthLargest.add(9)); // Returns 8 (Heap: [8, 10, 9])
log = console.log;
log("Adding 4:", kthLargest.add(4)); // Returns 8 (Heap: [8, 10, 9])
