/**
 * Problem: Subsets (LeetCode 78)
 * Difficulty: Medium
 * Pattern: Backtracking / Recursion
 * 
 * Goal: Given an integer array nums of unique elements, return all possible subsets (the power set).
 * Example: nums = [1, 2, 3]
 * Output: [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
 */

function subsets(nums) {
    let result = [];

    function backtrack(index, current) {
        // Base Case: Jab hum saare elements ka decision le lein
        if (index === nums.length) {
            result.push([...current]); // Copy push karte hain taaki reference mutation se bachein
            return;
        }

        // Option 1: Current element ko INCLUDE karo
        current.push(nums[index]);
        backtrack(index + 1, current);

        // Option 2: Current element ko EXCLUDE karo (Backtrack step)
        current.pop();
        backtrack(index + 1, current);
    }

    backtrack(0, []);
    return result;
}

// Test case
console.log("Subsets of [1, 2, 3]:");
console.log(subsets([1, 2, 3]));
