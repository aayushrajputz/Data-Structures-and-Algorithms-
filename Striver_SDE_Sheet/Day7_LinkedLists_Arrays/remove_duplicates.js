/**
 * LeetCode 26: Remove Duplicates from Sorted Array
 * Strategy: Two Pointers (In-place)
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */
function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // Slow pointer
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1; // Length of unique elements
}

// Test
let nums1 = [1, 1, 2, 2, 3];
let len = removeDuplicates(nums1);
console.log("Unique elements length:", len, "Array:", nums1.slice(0, len));
