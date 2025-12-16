/**
 * Problem: Maximum Sum Subarray of Size K
 * Pattern: Fixed Size Sliding Window 📏
 * 
 * Input: [2, 1, 5, 1, 3, 2], k = 3
 * Output: 9 (Subarray is [5, 1, 3])
 * 
 * --- Logic (The "Slide" Technique) ---
 * 
 * 1. Pehle 'k' elements ka sum nikalo (Initial Window).
 *    [2, 1, 5] -> Sum = 8. (Max = 8).
 * 
 * 2. Ab train aage badhao (Slide 1 step):
 *    - Naya Passenger aaya: `1` (Index 3). ADD karo.
 *    - Purana Passenger gaya: `2` (Index 0). SUBTRACT karo.
 *    - New Sum = 8 + 1 - 2 = 7.
 * 
 * 3. Repeat until end.
 *    - Next: Add 3, Remove 1.
 *    - Next: Add 2, Remove 5.
 * 
 * Formula: `CurrentSum = CurrentSum + arr[i] - arr[i-k]`
 */

function maxSumSubarray(arr, k) {
    if (arr.length < k) return null;

    let maxSum = 0;
    let currentSum = 0;

    // Step 1: Pehli Window banao (0 to k-1)
    for (let i = 0; i <= k - 1; i++) {
        currentSum += arr[i];
    }
    maxSum = currentSum;

    // Step 2: Slide karo (k to n-1)
    for (let i = k; i < arr.length; i++) {
        // Core Sliding Logic:
        // Add Naya (arr[i]) - Remove Purana (arr[i-k])
        currentSum = currentSum + arr[i] - arr[i - k];

        // Champion Update
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
}

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;
console.log("Max Sum:", maxSumSubarray(arr, k));
