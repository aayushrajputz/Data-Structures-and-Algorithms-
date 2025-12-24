/**
 * LeetCode 215: Kth Largest Element in an Array
 * 
 * Logic: Quick Select
 * 1. Use the same partition function as Quick Sort.
 * 2. Instead of sorting both sides, only recurse into the side that contains the Kth position.
 * 
 * Target Index (for Kth largest): n - k
 */

function findKthLargest(nums, k) {
    let targetIndex = nums.length - k;
    return quickSelect(nums, 0, nums.length - 1, targetIndex);
}

function quickSelect(nums, low, high, k) {
    if (low === high) return nums[low];

    let p = partition(nums, low, high);

    if (k <= p) {
        return quickSelect(nums, low, p, k);
    } else {
        return quickSelect(nums, p + 1, high, k);
    }
}

function partition(nums, low, high) {
    let pivot = nums[low];
    let i = low - 1;
    let j = high + 1;
    while (true) {
        do { i++; } while (nums[i] < pivot);
        do { j--; } while (nums[j] > pivot);
        if (i >= j) return j;
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
}

// Test Case
let nums = [3, 2, 3, 1, 2, 4, 5, 5, 6];
let k = 4;
// Sorted: [1, 2, 2, 3, 3, 4, 5, 5, 6] -> 4th largest is 4
console.log(`The ${k}th largest element is: ${findKthLargest(nums, k)}`);
