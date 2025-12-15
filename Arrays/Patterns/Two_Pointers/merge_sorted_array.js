/**
 * Problem: Merge Sorted Array
 * Logic: Reverse Fill (Peeche se Bharo Strategy)
 */

function merge(nums1, m, nums2, n) {
    let p1 = m - 1; // Last valid element of nums1 (e.g., 3)
    let p2 = n - 1; // Last element of nums2 (e.g., 6)
    let k = m + n - 1; // Last empty slot in nums1

    // Loop jab tak dono mein elements hain
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[k] = nums1[p1]; // nums1 ka element bada hai -> last mein dalo
            p1--;
        } else {
            nums1[k] = nums2[p2]; // nums2 ka element bada hai -> last mein dalo
            p2--;
        }
        k--;
    }

    // Edge Case: Agar nums2 mein abhi bhi kuch bacha hai
    // (nums1 ke elements khatam ho gaye, par nums2 ke chote elements bache hain)
    // Unko copy karna padega.
    while (p2 >= 0) {
        nums1[k] = nums2[p2];
        p2--;
        k--;
    }

    // Note: Agar p1 bacha hai to tension nahi, kyunki wo pehle se hi apni sahi jagah pe hai (nums1 mein).
}

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log("Merged nums1:", nums1);
