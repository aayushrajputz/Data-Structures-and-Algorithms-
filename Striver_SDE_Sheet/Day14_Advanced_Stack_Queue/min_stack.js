/**
 * Problem: Min Stack (O(1) Extra Space)
 * Logic: Encoding technique using 2*val - min
 * Time: O(1) for all operations
 * Space: O(1) extra (excluding the stack itself)
 */

class MinStack {
    constructor() {
        this.stack = [];
        this.min = Infinity;
    }

    push(val) {
        if (this.stack.length === 0) {
            this.min = val;
            this.stack.push(val);
        } else if (val >= this.min) {
            this.stack.push(val);
        } else {
            // Encode the new minimum
            this.stack.push(2 * val - this.min);
            this.min = val;
        }
    }

    pop() {
        if (this.stack.length === 0) return;

        let top = this.stack.pop();
        if (top < this.min) {
            // Restore previous minimum
            this.min = 2 * this.min - top;
        }
    }

    top() {
        let top = this.stack[this.stack.length - 1];
        if (top < this.min) {
            return this.min; // If encoded, min is the actual value
        }
        return top;
    }

    getMin() {
        return this.min;
    }
}

// --- TEST CASE ---
let ms = new MinStack();
ms.push(5);
ms.push(2);
ms.push(10);
console.log("Min after [5, 2, 10]:", ms.getMin()); // Expected: 2
ms.pop(); // Remove 10
ms.pop(); // Remove 2
console.log("Min after popping 10 and 2:", ms.getMin()); // Expected: 5
