/**
 * Problem: Implement Stack Using Arrays
 * Property: LIFO (Last In First Out)
 */

class MyStack {
    constructor(size = 10) {
        this.arr = new Array(size);
        this.capacity = size;
        this.top = -1;
    }

    push(x) {
        if (this.top >= this.capacity - 1) {
            console.log("Stack Overflow! 🛑");
            return;
        }
        // YOUR LOGIC HERE: Increment top and store x
        this.top++;
        this.arr[this.top] = x;
        console.log(`Pushed: ${x}`);
    }

    pop() {
        if (this.top === -1) {
            console.log("Stack Underflow! 🛑");
            return -1;
        }
        // YOUR LOGIC HERE: Get element, decrement top
        let element = this.arr[this.top];
        this.top--;
        return element;
    }

    peek() {
        if (this.top === -1) return -1;
        return this.arr[this.top];
    }

    isEmpty() {
        return this.top === -1;
    }
}
// Test It:
const stack = new MyStack(5);
stack.push(10);
stack.push(20);
stack.push(30);
console.log("Top Element:", stack.peek()); // Expected: 30
console.log("Popped:", stack.pop());       // Expected: 30
console.log("New Top:", stack.peek());    // Expected: 20

