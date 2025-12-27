/**
 * LeetCode 18: 4Sum
 * Approach: Sorting + Two Pointers + Duplicate Skipping
 * Time Complexity: O(N^3)
 * Space Complexity: O(1) (excluding output array)
 */

var fourSum = function (nums, target) {
    let n = nums.length;
    let ans = [];

    // 1. Sort the array
    nums.sort((a, b) => a - b);

    // 2. Loop i (First Element)
    for (let i = 0; i < n; i++) {
        // Skip duplicates for i
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        // 3. Loop j (Second Element)
        for (let j = i + 1; j < n; j++) {
            // Skip duplicates for j
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            // 4. Two Pointers (k and l)
            let k = j + 1;
            let l = n - 1;

            while (k < l) {
                // Use BigInt logic if numbers are very large, but JS handles up to 2^53 safely
                let sum = nums[i] + nums[j] + nums[k] + nums[l];

                if (sum === target) {
                    // FIX: Added commas to push distinct elements, not their sum
                    ans.push([nums[i], nums[j], nums[k], nums[l]]);
                    k++;
                    l--;

                    // Skip duplicates for k and l
                    while (k < l && nums[k] === nums[k - 1]) k++;
                    while (k < l && nums[l] === nums[l + 1]) l--;
                } else if (sum < target) {
                    k++;
                } else {
                    l--;
                }
            }
        }
    }
    return ans;
};

// Test Case
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
// Expected: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
