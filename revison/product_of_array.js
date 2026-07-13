var productExceptSelf = function (nums) {
    let n = nums.length;
    let res = [];
    res[0] = 1;

    for (let i = 1; i < n; i++) {
        res[i] = res[i - 1] * nums[i - 1]
    }

    let rightProduct = 1

    for (let i = n - 1; i >= 0; i--) {
        res[i] = res[i] * rightProduct;
        rightProduct = rightProduct * nums[i];
    }

    return res;
};

console.log(productExceptSelf([1, 2, 3, 4]))  // Expected: [24, 12, 8, 6]
console.log(productExceptSelf([-1, 1, 0, -3, 3]))  // Expected: [0, 0, 9, 0, 0]
