/**
 * MISSION: Find Median in a Stream (SCRATCH IMPLEMENTATION)
 * STRATEGY: Two Heaps (Max-Heap & Min-Heap) built from scratch using arrays 🛡️
 * TARGET: Major Tech Interviews / FAANG 🔥
 */

var MedianFinder = function () {
    this.maxHeap = []; // Small numbers (Left half)
    this.minHeap = []; // Large numbers (Right half)
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    // 1. First push to maxHeap (Max-Heap logic: largest of smalls on top)
    this.pushMax(num);

    // 2. Balancing: Pass the largest of smalls to minHeap (maintain sorting)
    this.pushMin(this.popMax());

    // 3. Keep size balanced (Max-Heap size should be equal or 1 more than Min-Heap)
    if (this.maxHeap.length < this.minHeap.length) {
        this.pushMax(this.popMin());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    if (this.maxHeap.length > this.minHeap.length) {
        return this.maxHeap[0];
    }
    return (this.maxHeap[0] + this.minHeap[0]) / 2;
};

// --- MANUAL HEAP HELPERS (The "Interviewer" Logic) ---

MedianFinder.prototype.pushMax = function (val) {
    this.maxHeap.push(val);
    let i = this.maxHeap.length - 1;
    while (i > 0) {
        let p = (i - 1) >> 1;
        if (this.maxHeap[i] > this.maxHeap[p]) {
            [this.maxHeap[i], this.maxHeap[p]] = [this.maxHeap[p], this.maxHeap[i]];
            i = p;
        } else break;
    }
};

MedianFinder.prototype.popMax = function () {
    const top = this.maxHeap[0];
    const last = this.maxHeap.pop();
    if (this.maxHeap.length > 0) {
        this.maxHeap[0] = last;
        let i = 0;
        while (true) {
            let l = 2 * i + 1, r = 2 * i + 2, big = i;
            if (l < this.maxHeap.length && this.maxHeap[l] > this.maxHeap[big]) big = l;
            if (r < this.maxHeap.length && this.maxHeap[r] > this.maxHeap[big]) big = r;
            if (big !== i) {
                [this.maxHeap[i], this.maxHeap[big]] = [this.maxHeap[big], this.maxHeap[i]];
                i = big;
            } else break;
        }
    }
    return top;
};

MedianFinder.prototype.pushMin = function (val) {
    this.minHeap.push(val);
    let i = this.minHeap.length - 1;
    while (i > 0) {
        let p = (i - 1) >> 1;
        if (this.minHeap[i] < this.minHeap[p]) {
            [this.minHeap[i], this.minHeap[p]] = [this.minHeap[p], this.minHeap[i]];
            i = p;
        } else break;
    }
};

MedianFinder.prototype.popMin = function () {
    const top = this.minHeap[0];
    const last = this.minHeap.pop();
    if (this.minHeap.length > 0) {
        this.minHeap[0] = last;
        let i = 0;
        while (true) {
            let l = 2 * i + 1, r = 2 * i + 2, small = i;
            if (l < this.minHeap.length && this.minHeap[l] < this.minHeap[small]) small = l;
            if (r < this.minHeap.length && this.minHeap[r] < this.minHeap[small]) small = r;
            if (small !== i) {
                [this.minHeap[i], this.minHeap[small]] = [this.minHeap[small], this.minHeap[i]];
                i = small;
            } else break;
        }
    }
    return top;
};
