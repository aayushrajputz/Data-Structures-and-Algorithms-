function maxSubArray(nums) {
    let max = -Infinity; // Fixed: -Infinity (Capital I)

    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) { // Fixed: nums.length (was arr.length)
        currentSum = currentSum + nums[i];

        if (currentSum > max) {
            max = currentSum; // Fixed: max = currentSum (was currentSum = max)
        }
        if (currentSum < 0) {
            currentSum = 0;
        }
    }
    return max; // Moved outside loop
}

let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Max Subarray Sum:", maxSubArray(nums));