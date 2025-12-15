/**
 * Problem: Remove Duplicates from Sorted Array (LeetCode 26)
 * Pattern: Slow - Fast Pointer
 * 
 * Logic:
 * Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
 * 
 * Strategy:
 * 1. Slow Pointer (i): Tracks the position of the last UNIQUE element.
 * 2. Fast Pointer (j): Scans ahead to find new unique elements.
 * 
 * Condition:
 * If nums[j] !== nums[i], it means we found a NEW unique number.
 * - Move Slow (i++).
 * - Copy Fast to Slow (nums[i] = nums[j]).
 */

function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let l = 0;
    for (let r = 1; r < nums.length; r++) {
        if (nums[r] !== nums[l]) {
            l++;
            nums[l] = nums[r]
        }
    }
    return l + 1;

}

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k = removeDuplicates(nums);
console.log("New Length:", k);
console.log("Array (up to k):", nums.slice(0, k));
