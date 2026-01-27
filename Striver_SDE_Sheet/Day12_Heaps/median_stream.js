/**
 * MISSION: SDE-1 @ Razorpay / Databricks
 * TASK: Find Median from Data Stream
 * PATTERN: Two Heaps (Max-Heap for Left Half, Min-Heap for Right Half)
 * LOGIC:
 *   - Max-Heap stores smaller half of elements.
 *   - Min-Heap stores larger half of elements.
 *   - Max-Heap root is the largest of small half.
 *   - Min-Heap root is the smallest of large half.
 */

const MinHeap = require('./min_heap.js');

class MedianFinder {
    constructor() {
        // Left half: Max-Heap (stores small numbers, root is largest)
        this.maxHeap = new MinHeap((a, b) => b - a);
        // Right half: Min-Heap (stores large numbers, root is smallest)
        this.minHeap = new MinHeap((a, b) => a - b);
    }

    addNum(num) {
        // 1. Logic: First push to maxHeap
        this.maxHeap.insert(num);

        // 2. Ensure every elem in maxHeap is <= every elem in minHeap
        if (this.maxHeap.heap.length > 0 && this.minHeap.heap.length > 0 &&
            this.maxHeap.peek() > this.minHeap.peek()) {
            this.minHeap.insert(this.maxHeap.extractMin());
        }

        // 3. Balance the sizes (size difference <= 1)
        if (this.maxHeap.heap.length > this.minHeap.heap.length + 1) {
            this.minHeap.insert(this.maxHeap.extractMin());
        } else if (this.minHeap.heap.length > this.maxHeap.heap.length + 1) {
            this.maxHeap.insert(this.minHeap.extractMin());
        }
    }

    findMedian() {
        if (this.maxHeap.heap.length > this.minHeap.heap.length) {
            return this.maxHeap.peek();
        } else if (this.minHeap.heap.length > this.maxHeap.heap.length) {
            return this.minHeap.peek();
        } else {
            // Both sides equal, median is average of both roots
            return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
        }
    }
}

// TEST CASES
const mf = new MedianFinder();
mf.addNum(1);
mf.addNum(2);
console.log("Median after [1, 2] (Expected 1.5):", mf.findMedian());
mf.addNum(3);
console.log("Median after [1, 2, 3] (Expected 2):", mf.findMedian());
