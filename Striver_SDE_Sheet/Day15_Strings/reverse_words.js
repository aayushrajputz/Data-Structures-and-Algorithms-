/**
 * Problem: Reverse Words in a String (LeetCode 151)
 * Pattern: Two Pointers + Clean-up Logic
 */

class Solution {
    reverseWords(s) {
        // 1. Clean up spaces and split into words array
        // regex /\s+/ handles multiple spaces efficiently
        let arr = s.trim().split(/\s+/);

        let left = 0;
        let right = arr.length - 1;

        // 2. Two Pointer Swap (Reversing the array of words)
        while (left < right) {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }

        // 3. Join back with a single space
        return arr.join(' ');
    }
}

// --- TEST CASE ---
const sol = new Solution();
const input = "  the sky  is blue  ";
console.log("Input:  '" + input + "'");
console.log("Output: '" + sol.reverseWords(input) + "'");
