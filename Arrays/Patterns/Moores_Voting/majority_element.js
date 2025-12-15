/*
 Pattern: Moore's Voting Algorithm
 Problem: Find the Majority Element (> n/2 times)
 Logic:
 - If we cancel out every non-majority element with a majority element,
   the majority element will still remain.
 - Time: O(n), Space: O(1)
 */

function majorityElement(nums) {
    let candidate = null;
    let count = 0;

    for (let num of nums) {
        if (count === 0) {
            candidate = num; // New candidate
        }

        // Vote logic
        if (num === candidate) {
            count++;
        } else {
            count--; // Cancel out
        }
    }

    // Note: If majority element is not guaranteed, we need a second pass to verify count > n/2.
    // But LeetCode 169 guarantees it exists.
    return candidate;
}

// --- Test Cases ---
console.log("Majority (3,2,3):", majorityElement([3, 2, 3])); // Output: 3
console.log("Majority (2,2,1,1,1,2,2):", majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
