/**
 * Problem: Sort a Stack using Recursion
 * Logic: 
 * 1. sortStack - Recursively pop elements until stack is empty.
 * 2. sortedInsert - Put elements back in the correct position.
 * Time Complexity: O(N^2)
 * Space Complexity: O(N) due to recursion call stack.
 */

class StackSorter {
    constructor() {
        this.stack = [];
    }

    sortStack(stack) {
        // Base Case: If stack is empty, return
        if (stack.length === 0) {
            return;
        }

        // 1. Hold the top element and pop
        let temp = stack.pop();

        // 2. Sort the remaining stack
        this.sortStack(stack);

        // 3. Put the held element back in sorted order
        this.sortedInsert(stack, temp);
    }

    sortedInsert(stack, element) {
        // Base Case: If stack is empty OR top element is smaller than current element
        // (Assuming we want ascending order: smallest at bottom, largest at top)
        if (stack.length === 0 || stack[stack.length - 1] <= element) {
            stack.push(element);
            return;
        }

        // 1. If top is greater, hold it and pop
        let temp = stack.pop();

        // 2. Recur to find the right place for 'element'
        this.sortedInsert(stack, element);

        // 3. Put the temporarily held 'temp' back
        stack.push(temp);
    }
}

// --- TEST CASES ---
const sorter = new StackSorter();
let myStack = [3, 1, 4, 2];
console.log("Original Stack:", myStack);
sorter.sortStack(myStack);
console.log("Sorted Stack:", myStack); // Expected: [1, 2, 3, 4]
