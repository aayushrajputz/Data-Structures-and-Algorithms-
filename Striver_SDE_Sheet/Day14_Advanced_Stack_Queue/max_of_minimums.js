/**
 * Problem: Maximum of Minimums for every window size
 * Level: Hard (Extreme)
 * Pattern: NSL + NSR + Result Propagation
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function maxOfMinima(arr) {
    const n = arr.length;
    const nsl = new Array(n).fill(-1);
    const nsr = new Array(n).fill(n);
    const stack = [];

    // 1. Calculate NSL (Next Smaller Left)
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) nsl[i] = stack[stack.length - 1];
        stack.push(i);
    }

    // 2. Clear stack for NSR
    stack.length = 0;

    // 3. Calculate NSR (Next Smaller Right)
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) nsr[i] = stack[stack.length - 1];
        stack.push(i);
    }

    // 4. Initial result array
    const ans = new Array(n + 1).fill(0);

    // 5. Fill initial max mins based on element contribution
    for (let i = 0; i < n; i++) {
        let len = nsr[i] - nsl[i] - 1;
        ans[len] = Math.max(ans[len], arr[i]);
    }

    // 6. Backward fill (Propagate results to smaller windows)
    for (let i = n - 1; i >= 1; i--) {
        ans[i] = Math.max(ans[i], ans[i + 1]);
    }

    // Remove first 0 as we need sizes 1 to N
    return ans.slice(1);
}

// --- TEST CASE ---
const arr = [10, 20, 30, 50, 10, 70, 30];
console.log("Input Array:", arr);
const result = maxOfMinima(arr);

console.log("Maximum of Minimums for window sizes 1 to N:");
console.log(result);
// Expected: [70, 30, 20, 10, 10, 10, 10]
