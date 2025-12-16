/**
 * Problem: First Negative Number in every Window of Size K
 * Pattern: Fixed Size Sliding Window + State Management (Queue) 📉
 * 
 * Input: nums = [12, -1, -7, 8, -15, 30, 16, 28], k = 3
 * Output: [-1, -1, -7, -15, -15, 0]
 * 
 * --- Logic ---
 * Sirf Sum/Max track karne se kaam nahi chalega.
 * Humein "Negative Numbers" ka track rakhna padega.
 * 
 * Tool: Array/Queue (Store negatives only).
 * 
 * 1. Step 1 (First Window):
 *    - Scan first k=3 elements `[12, -1, -7]`.
 *    - Negatives found: `[-1, -7]`. Store them.
 *    - Result For Window 1: Queue ka First element -> `-1`.
 * 
 * 2. Step 2 (Slide):
 *    - **Remove Old:** Agar purana element (`arr[i-k]`) Queue ke front pe hai, to Queue se hatao (Shift).
 *    - **Add New:** Agar naya element (`arr[i]`) negative hai, to Queue mein dalo (Push).
 *    - **Result:** Queue ka First. (Agar queue empty hai to 0).
 */

class Solution {
    firstNegInt(arr, k) {
        let neg = [];
        let result = [];
        let n = arr.length;

        // STEP 1: First Window (0 to k-1)
        for (let i = 0; i < k; i++) {
            if (arr[i] < 0) {
                neg.push(arr[i]);
            }
        }

        // First window result
        if (neg.length > 0) result.push(neg[0]);
        else result.push(0);

        // STEP 2: Sliding Window
        for (let i = k; i < n; i++) {

            // Remove outgoing element
            if (arr[i - k] === neg[0]) {
                neg.shift();
            }

            // Add incoming element
            if (arr[i] < 0) {
                neg.push(arr[i]);
            }

            // Store result
            if (neg.length > 0) result.push(neg[0]);
            else result.push(0);
        }

        return result;
    }
}


let arr = [12, -1, -7, 8, -15, 30, 16, 28];
let k = 3;
console.log("First Negatives:", firstNegativeInWindow(arr, k));
