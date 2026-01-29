/**
 * MISSION: HARD KILL @ STRIVER SDE SHEET
 * PROBLEM: Implement Stack Using a Single Queue
 * LOGIC: One-Queue Rotation (O(N) Push, O(1) Pop)
 */

class StackUsingQueue {
    constructor() {
        this.q = [];
    }

    push(x) {
        // Step 1: Push naya element end mein
        this.q.push(x);

        // Step 2: Purane (size-1) elements ko rotate karke piche dalo
        let size = this.q.length;
        for (let i = 0; i < size - 1; i++) {
            this.q.push(this.q.shift());
        }
        console.log(`Pushed: ${x} (Queue Front now points here)`);
    }

    pop() {
        if (this.isEmpty()) {
            console.log("Stack Underflow! 🛑");
            return -1;
        }
        // Because of rotation, Queue Front is the Stack Top
        return this.q.shift();
    }

    top() {
        if (this.isEmpty()) return -1;
        return this.q[0];
    }

    isEmpty() {
        return this.q.length === 0;
    }
}

// --- TEST CASES ---
const stack = new StackUsingQueue();
stack.push(1);
stack.push(2);
stack.push(3);
console.log("Top Element (Expected 3):", stack.top());
console.log("Popped Element (Expected 3):", stack.pop());
console.log("New Top (Expected 2):", stack.top());
