/**
 * Problem: K-th Element of Two Sorted Arrays
 * Difficulty: Hard
 * Time Complexity: O(log(min(n, m)))
 * 
 * Logic:
 * Similar to Median of 2 sorted arrays, but instead of half, 
 * we want exactly 'k' elements on the left side.
 */

function kthElement(arr1, arr2, n, m, k) {
    // Standard trick: Binary Search on smaller array
    if (n > m) return kthElement(arr2, arr1, m, n, k);

    let low = Math.max(0, k - m); // We must take at least (k - m) from arr1
    let high = Math.min(k, n);   // We can take at most n or k from arr1

    while (low <= high) {
        let cut1 = Math.floor((low + high) / 2);
        let cut2 = k - cut1;

        let l1 = cut1 === 0 ? -Infinity : arr1[cut1 - 1];
        let l2 = cut2 === 0 ? -Infinity : arr2[cut2 - 1];
        let r1 = cut1 === n ? Infinity : arr1[cut1];
        let r2 = cut2 === m ? Infinity : arr2[cut2];

        if (l1 <= r2 && l2 <= r1) {
            // Found the partition where left side has exactly k elements
            return Math.max(l1, l2);
        } else if (l1 > r2) {
            high = cut1 - 1;
        } else {
            low = cut1 + 1;
        }
    }
    return -1;
}

// Test Case
let a = [2, 3, 6, 7, 9];
let b = [1, 4, 8, 10];
let k = 5;
console.log(kthElement(a, b, a.length, b.length, k)); // Expected: 6
// Sorted merged: [1, 2, 3, 4, 6, 7, 8, 9, 10] -> 5th element is 6.
