/**
 * LeetCode 42: Trapping Rain Water
 * Strategy: Two Pointers (Optimal O(1) Space)
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let n = height.length;
    if (n <= 2) return 0;

    let left = 0, right = n - 1;
    let leftMax = 0, rightMax = 0;
    let totalWater = 0;

    while (left <= right) {
        if (height[left] <= height[right]) {
            // Processing Left side because height[right] acts as a confirmed boundary
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                totalWater += leftMax - height[left];
            }
            left++;
        } else {
            // Processing Right side because height[left] acts as a confirmed boundary
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                totalWater += rightMax - height[right];
            }
            right--;
        }
    }

    return totalWater;
};

let heights1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log("Trapped Water (Test 1):", trap(heights1)); // Expected: 6

let heights2 = [4, 2, 0, 3, 2, 5];
console.log("Trapped Water (Test 2):", trap(heights2)); // Expected: 9
