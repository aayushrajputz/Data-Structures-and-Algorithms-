/**
 * Problem: Sliding Window Maximum (LeetCode 239)
 * Level: HARD
 * Pattern: Monotonic Deque (Doubly Ended Queue)
 * Complexity: O(N)
 */

function maxSlidingWindow(nums, k) {
    const n = nums.length;
    let deque = []; // Stores indices
    let result = [];

    for (let i = 0; i < n; i++) {
        // 1. Remove indices that are out of the current window
        if (deque.length > 0 && deque[0] <= i - k) {
            deque.shift(); // Remove from Front
        }

        // 2. Maintain Monotonicity: Remove smaller elements from back
        // If current element is larger, elements currently in deque 
        // will never be maximums for this or future windows.
        while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop(); // Remove from Back
        }

        deque.push(i);

        // 3. The Front of the Deque always holds the maximum index
        // Start storing results once we have completed the first window
        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }

    return result;
}

// --- TEST CASE ---
const nums = [1, 3, -1, -3, 5, 3, 6, 7];
const k = 3;
console.log("Input:", nums, "k =", k);
console.log("Output:", maxSlidingWindow(nums, k)); // Expected: [3, 3, 5, 5, 6, 7]
