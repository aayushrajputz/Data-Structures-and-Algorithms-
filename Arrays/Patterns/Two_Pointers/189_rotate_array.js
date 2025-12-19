/**
 * Problem: 189. Rotate Array
 * Pattern: Circular Manipulation / Array Reversal 🔄
 * 
 * Logic:
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * 
 * 1. k = k % n (Handle cases where k > n)
 * 2. Reverse pura array: [7,6,5,4,3,2,1]
 * 3. Reverse first k: [5,6,7, | 4,3,2,1]
 * 4. Reverse remaining: [5,6,7, | 1,2,3,4] -> DONE! ✅
 */

function rotate(nums, k) {
    const n = nums.length;
    k = k % n; // Sabse important step 🔑

    // Helper function to reverse part of array
    function reverse(arr, start, end) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }

    // Triple Reverse Magic
    reverse(nums, 0, n - 1);       // 1. Pura reverse
    reverse(nums, 0, k - 1);       // 2. Pehle k reverse
    reverse(nums, k, n - 1);       // 3. Baki reverse
    
    return nums;
}

// Test Run
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log("Original:", [...arr]);
console.log("Rotated (k=3):", rotate(arr, 3));
