/**
 * MISSION: SDE @ Razorpay / Databricks
 * PROBLEM: Implement Queue Using Arrays (Circular Queue)
 * PROPERTY: FIFO (First In First Out)
 */

class MyQueue {
    constructor(capacity = 5) {
        this.capacity = capacity;
        this.arr = new Array(capacity);
        this.front = 0;
        this.rear = 0;
        this.curSize = 0;
    }

    // Push: Add to the rear
    enqueue(x) {
        if (this.curSize === this.capacity) {
            console.log("Queue Overflow! 🛑");
            return;
        }
        this.arr[this.rear % this.capacity] = x;
        this.rear++;
        this.curSize++;
        console.log(`Enqueued: ${x}`);
    }

    // Pop: Remove from the front
    dequeue() {
        if (this.curSize === 0) {
            console.log("Queue Underflow! 🛑");
            return -1;
        }
        let element = this.arr[this.front % this.capacity];
        this.front++;
        this.curSize--;
        return element;
    }

    peek() {
        if (this.curSize === 0) return -1;
        return this.arr[this.front % this.capacity];
    }

    size() {
        return this.curSize;
    }
}

// --- TEST CASES ---
const q = new MyQueue(5);
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log("Front Element:", q.peek());      // Expected: 10
console.log("Dequeued:", q.dequeue());         // Expected: 10
console.log("New Front:", q.peek());          // Expected: 20
q.enqueue(40);
q.enqueue(50);
q.enqueue(60); // Testing circular/capacity
console.log("Current Size:", q.size());       // Expected: 4
