/*
 Problem: Maximum Subarray Sum (Kadane's Algorithm)
 Logic:
 - Iterate and add to currentSum.
 - If currentSum < 0 -> RESET currentSum to 0 (carrying debt is bad).
 - Keep tracking max.
*/

// Version 1: Returns ONLY the Sum (Standard LeetCode 53)
function maxSubArraySumOnly(nums) {
    let max = -Infinity;
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum = currentSum + nums[i];

        if (currentSum > max) {
            max = currentSum;
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return max;
}

// Version 2: Returns the ACTUAL SUBARRAY (Interview Special)
function maxSubArrayElements(nums) {
    let maxSum = nums[0];
    let currentSum = 0;

    let start = 0;      // Final Start Index
    let end = 0;        // Final End Index
    let tempStart = 0;  // Potential Start Index (resets when sum < 0)

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];

        // Found a new Max? Update Start & End
        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
        }

        // Sum negative? Reset!
        if (currentSum < 0) {
            currentSum = 0;
            tempStart = i + 1; // Nayi shuruwat agle index se
        }
    }

    // Slice returns from start to end (end not included, so +1)
    return nums.slice(start, end + 1);
}

// --- Test Cases ---
let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

console.log("Max Sum:", maxSubArraySumOnly(nums));
console.log("Max Subarray Elements:", maxSubArrayElements(nums));

// Test Case 2 (All Negative)
let nums2 = [-5, -1, -9];
console.log("\nNums2:", nums2);
console.log("Max Sum (Basic):", maxSubArraySumOnly(nums2));
// Note: Basic version fails for all negative if we init with 0 logic incorrectly, 
// but here we used -Infinity so it handles it partially, except the reset logic makes it 0.
// For all negative, specialized logic is often discussed, but let's see standard output.