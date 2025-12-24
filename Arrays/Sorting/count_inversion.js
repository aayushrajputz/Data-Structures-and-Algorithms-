/**
 * Count Inversions using Merge Sort Logic
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

function merge(arr, low, mid, high) {
    let temp = []; // Use array, not 0
    let left = low;
    let right = mid + 1; // High part starts from mid + 1
    let count = 0;

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            // Core Logic:
            // If arr[left] > arr[right], then all elements from left index
            // until mid form an inversion pair with arr[right].
            count += (mid - left + 1);
            temp.push(arr[right]);
            right++;
        }
    }

    // Copy remaining elements
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    // Sync temp back to original array
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
    return count;
}

function mergeSort(arr, low, high) {
    let count = 0;
    if (low < high) { // Correct base case to avoid infinite recursion
        let mid = Math.floor(low + (high - low) / 2);
        count += mergeSort(arr, low, mid);
        count += mergeSort(arr, mid + 1, high);
        count += merge(arr, low, mid, high); // Correct argument order
    }
    return count;
}

// Test Case
const testArr = [5, 3, 2, 4, 1];
console.log("Original Array:", testArr);
const result = mergeSort([...testArr], 0, testArr.length - 1);
console.log("Total Inversions:", result);