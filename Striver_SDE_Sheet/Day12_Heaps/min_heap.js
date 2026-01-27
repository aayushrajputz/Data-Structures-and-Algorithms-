/**
 * MISSION: SDE-3 @ Databricks
 * TASK: PRODUCTION-GRADE MIN-HEAP
 * CONSTRAINTS: 
 *   - Iterative HeapifyDown (O(log N))
 *   - O(N) buildHeap implementation
 *   - No "man nahi kar raha" logic.
 */

class MinHeap {
    constructor(comparator = null) {
        this.heap = [];
        /**
         * Generic Comparator:
         * (a, b) => a - b  --> Min-Heap (default)
         * (a, b) => b - a  --> Max-Heap
         * (a, b) => a.freq - b.freq --> Min-Heap based on frequency
         */
        this.compare = comparator || ((a, b) => a - b);
    }

    getParentIndex(i) { return Math.floor((i - 1) / 2); }
    getLeftChildIndex(i) { return 2 * i + 1; }
    getRightChildIndex(i) { return 2 * i + 2; }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    peek() {
        return this.heap.length === 0 ? null : this.heap[0];
    }

    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parent = this.getParentIndex(index);
            // If compare(current, parent) < 0, it means current is "smaller" (in Min-Heap sense)
            if (this.compare(this.heap[index], this.heap[parent]) < 0) {
                this.swap(index, parent);
                index = parent;
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0);
        return min;
    }

    heapifyDown(index) {
        let n = this.heap.length;
        while (true) {
            let smallest = index;
            let left = this.getLeftChildIndex(index);
            let right = this.getRightChildIndex(index);

            if (left < n && this.compare(this.heap[left], this.heap[smallest]) < 0) {
                smallest = left;
            }
            if (right < n && this.compare(this.heap[right], this.heap[smallest]) < 0) {
                smallest = right;
            }

            if (smallest !== index) {
                this.swap(index, smallest);
                index = smallest; // Move down the tree
            } else {
                break; // Properly positioned
            }
        }
    }

    buildHeap(array) {
        /**
         * Logic: We start from the last non-leaf node and move up to the root.
         * Time Complexity: O(N). 
         * Why? Nodes at the bottom are more numerous but only move 1-2 steps.
         */
        this.heap = array;
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i);
        }
    }
}

module.exports = MinHeap;

