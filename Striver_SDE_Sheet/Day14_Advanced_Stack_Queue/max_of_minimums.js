/**
 * Problem: Maximum of Minimums for every window size
 * Pattern: Monotonic Stack (NSL/NSR) + Backward DP
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function maxOfMinimums(arr) {
    let n = arr.length;
    let nsl = new Array(n).fill(-1);
    let nsr = new Array(n).fill(n);
    let stack = [];

    // 1. Find Nearest Smaller to Left (NSL)
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) nsl[i] = stack[stack.length - 1];
        stack.push(i);
    }

    stack = []; // Reset stack

    // 2. Find Nearest Smaller to Right (NSR)
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) nsr[i] = stack[stack.length - 1];
        stack.push(i);
    }

    // 3. Result Array based on Window Size
    let res = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        let size = nsr[i] - nsl[i] - 1;
        res[size] = Math.max(res[size], arr[i]);
    }

    // 4. Fill gaps (Backward propagation)
    // A max of mins for size k is also a candidate for size k-1
    for (let i = n - 1; i >= 1; i--) {
        res[i] = Math.max(res[i], res[i + 1]);
    }

    return res.slice(1);
}

// --- TEST CASE ---
const arr = [10, 20, 30, 50, 10, 70, 30];
console.log("Input Array: ", arr);
const result = maxOfMinimums(arr);
console.log("Max of Mins for size 1..N: ");
console.log(result);

// Logic Check for size 1: Min options are (10, 20, 30, 50, 10, 70, 30). Max is 70. ✅
// Logic Check for size 7: Only one window [10...30]. Min is 10. Max is 10. ✅
