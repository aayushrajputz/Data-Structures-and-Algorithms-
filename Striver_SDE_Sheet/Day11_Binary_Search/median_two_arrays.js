/**
 * Problem: Median of Two Sorted Arrays (LeetCode 4)
 * Difficulty: Hard
 * Time Complexity: O(log(min(n, m)))
 * 
 * Logic:
 * We partition both arrays such that the left side has half the total elements.
 * We adjust partition1 (cut1) using Binary Search on the smaller array.
 */

function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

    let n1 = nums1.length;
    let n2 = nums2.length;
    let low = 0, high = n1;

    while (low <= high) {
        let cut1 = Math.floor((low + high) / 2);
        let cut2 = Math.floor((n1 + n2 + 1) / 2) - cut1;

        // Boundary conditions: Handle -Infinity and +Infinity
        let l1 = cut1 === 0 ? -Infinity : nums1[cut1 - 1];
        let l2 = cut2 === 0 ? -Infinity : nums2[cut2 - 1];
        let r1 = cut1 === n1 ? Infinity : nums1[cut1];
        let r2 = cut2 === n2 ? Infinity : nums2[cut2];

        if (l1 <= r2 && l2 <= r1) {
            // Median found!
            if ((n1 + n2) % 2 === 0) {
                return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0;
            } else {
                return Math.max(l1, l2);
            }
        } else if (l1 > r2) {
            // Cut1 is too far right, move left
            high = cut1 - 1;
        } else {
            // Cut1 is too far left, move right
            low = cut1 + 1;
        }
    }
    return 0.0;
}

// Test Cases
console.log(findMedianSortedArrays([1, 3], [2]));        // Expected: 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4]));     // Expected: 2.5
