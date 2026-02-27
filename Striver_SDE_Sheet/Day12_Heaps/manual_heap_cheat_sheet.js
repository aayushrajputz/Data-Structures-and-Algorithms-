/**
 * MISSION: Manual Heap Reference (Cheat Sheet) 🛡️
 * TARGET: Every Tech Interview Ever! 🏎️💨
 */

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // 1. PUSH (Bubble Up)
    push(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;
        while (i > 0) {
            let p = Math.floor((i - 1) / 2);
            if (this.heap[i] < this.heap[p]) {
                [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
                i = p;
            } else break;
        }
    }

    // 2. POP (Bubble Down / Heapify)
    pop() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const top = this.heap[0];
        this.heap[0] = this.heap.pop(); // Last element becomes root

        let i = 0;
        while (true) {
            let left = 2 * i + 1;
            let right = 2 * i + 2;
            let smallest = i;

            // Chota bachha dhoondo
            if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < this.heap.length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }

            if (smallest !== i) {
                [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
                i = smallest; // Continue down
            } else {
                break; // Logic ki Jeet! Heap maintain ho gaya.
            }
        }
        return top;
    }
}
