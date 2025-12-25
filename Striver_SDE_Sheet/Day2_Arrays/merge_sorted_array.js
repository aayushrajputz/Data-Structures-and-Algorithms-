/**
 * Merge Sorted Array (LeetCode 88)
 * Time Complexity: O(M + N)
 * Space Complexity: O(1)
 */

function merge(nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;

    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
            k--;
        } else {
            nums1[k] = nums2[j];
            j--;
            k--;
        }

    }

    // If nums2 still has elements left (nums1 elements already in place)
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}

// Test Case
let n1 = [4, 5, 6, 0, 0, 0], m = 3;
let n2 = [1, 2, 3], n = 3;
merge(n1, m, n2, n);
console.log("Merged Sorted Array:", n1);
// Expected: [1, 2, 2, 3, 5, 6]
