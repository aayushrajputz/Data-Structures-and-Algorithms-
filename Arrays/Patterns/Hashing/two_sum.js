/**
 * Problem: Two Sum (LeetCode #1)
 * Input: nums = [2, 7, 11, 15], target = 9
 * Output: [0, 1]
 */

function twoSum(nums, target) {

    let register = new Map();
    for (let i = 0; i < nums.length; i++) {
        let currentNumber = nums[i];
        let currentTarget = target - currentNumber;
        if (register.has(currentTarget)) {
            return [register.get(currentTarget), i];

        } else {
            register.set(currentNumber, i);
        }
    }
    return [];
}

let nums = [2, 7, 11, 15];
let target = 9;
console.log(twoSum(nums, target));
