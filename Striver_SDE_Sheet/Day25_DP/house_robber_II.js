function maxSumSpace(arr) {
    let n = arr.length
    let prev1 = arr[0]
    let prev2 = 0;
    for (let i = 1; i < n; i++) {
        let pick = arr[i] + prev2;
        let notPick = prev1;
        let curr = Math.max(pick, notPick);
        prev2 = prev1
        prev1 = curr
    }
    return prev1
}

function houseRob(nums) {
    let n = nums.length;
    if (n === 1) return nums[0];

    let arr1 = nums.slice(0, n - 1);
    let arr2 = nums.slice(1);

    return Math.max(maxSumSpace(arr1), maxSumSpace(arr2));
}

console.log("Circular Test Case 1 [2, 3, 2]:", houseRob([2, 3, 2])); // Expected: 3
console.log("Circular Test Case 2 [1, 2, 3, 1]:", houseRob([1, 2, 3, 1])); // Expected: 4
console.log("Circular Test Case 3 [0]:", houseRob([0])); // Expected: 0

module.exports = { houseRob };
