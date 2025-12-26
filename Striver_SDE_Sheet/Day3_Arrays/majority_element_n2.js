/**
 * LeetCode 169: Majority Element (> n/2)
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function majorityElement(nums) {
    let candidate = 0;
    let count = 0;

    // Phase 1: Finding an absolute candidate
    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }

        if (num === candidate) {
            count++;
        } else {
            count--;
        }
    }

    // Phase 2: Verification (Optional ONLY if problem guarantees majority exists)
    // For Striver/LeetCode, n/2 element always exists as per problem description.
    return candidate;
}

// Test Case
console.log("Majority [2,2,1,1,1,2,2]:", majorityElement([2, 2, 1, 1, 1, 2, 2])); // Expected: 2
