/**
 * MISSION: SDE @ PBC
 * PROBLEM: Implement Queue Using Stacks
 * LOGIC: Amortized O(1) using Two Stacks
 */

class MyQueue {
    constructor() {
        this.input = [];
        this.output = [];
    }

    /** 
     * Push element x to the back of queue. 
     */
    enqueue(x) {
        this.input.push(x);
        console.log(`Enqueued: ${x}`);
    }

    /** 
     * Removes the element from the front of queue and returns it.
     */
    dequeue() {
        this.peek(); // Ensure output stack has current elements
        if (this.output.length === 0) return -1;
        return this.output.pop();
    }

    /** 
     * Get the front element.
     */
    peek() {
        if (this.output.length === 0) {
            while (this.input.length > 0) {
                this.output.push(this.input.pop());
            }
        }
        if (this.output.length === 0) return -1;
        return this.output[this.output.length - 1];
    }

    empty() {
        return this.input.length === 0 && this.output.length === 0;
    }
}

// --- TEST CASES ---
const q = new MyQueue();
q.enqueue(1);
q.enqueue(2);
console.log("Front (Expected 1):", q.peek());
console.log("Dequeued (Expected 1):", q.dequeue());
console.log("Front (Expected 2):", q.peek());
