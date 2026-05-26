function maxProduct(nums) {
    let n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];
    let max = nums[0]
    let min = nums[0]
    let ans = nums[0]

    for (let i = 1; i <= n - 1; i++) {
        if (nums[i] < 0) {
            let temp = max;
            max = min;
            min = temp;
        }
        max = Math.max(nums[i], max * nums[i])
        min = Math.min(nums[i], min * nums[i])
        ans = Math.max(ans, max)
    }
    return ans;
}

console.log("Test Case 1 [2, 3, -2, 4]:", maxProduct([2, 3, -2, 4])); // Expected: 6
console.log("Test Case 2 [-2, 3, -4]:", maxProduct([-2, 3, -4]));     // Expected: 24
console.log("Test Case 3 [-2, 0, -1]:", maxProduct([-2, 0, -1]));     // Expected: 0

module.exports = { maxProduct };
