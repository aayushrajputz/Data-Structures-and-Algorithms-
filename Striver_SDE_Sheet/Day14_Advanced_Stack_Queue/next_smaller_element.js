/**
 * Problem: Next Smaller Element
 * Pattern: Monotonic Stack (Increasing Stack)
 * Time Complexity: O(N)
 * Logic: Process from Right to Left. Pop elements >= current.
 */

function nextSmallerElement(arr) {
    const n = arr.length;
    const stack = [];
    const result = new Array(n);

    // Right to Left scan
    for (let i = n - 1; i >= 0; i--) {
        const current = arr[i];

        // 1. Maintain Monotonicity: Remove elements that are NOT smaller
        while (stack.length > 0 && stack[stack.length - 1] >= current) {
            stack.pop();
        }

        // 2. Assign Result: If stack is empty, no smaller element exists
        if (stack.length === 0) {
            result[i] = -1;
        } else {
            result[i] = stack[stack.length - 1];
        }

        // 3. Push Current: To be a potential smaller element for the left
        stack.push(current);
    }

    return result;
}

// --- TEST CASES ---
console.log("Input: [4, 8, 5, 2, 25]");
console.log("Output:", nextSmallerElement([4, 8, 5, 2, 25])); // Expected: [2, 5, 2, -1, -1]

console.log("Input: [1, 3, 2]");
console.log("Output:", nextSmallerElement([1, 3, 2])); // Expected: [-1, 2, -1]
