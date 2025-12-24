/**
 * Merge Sort Logic:
 * 1. Divide: Break array into halves (Recursion)
 * 2. Conquer: Sort single elements
 * 3. Merge: Combine sorted halves using two pointers
 */

function merge(arr, low, mid, high) {
    let temp = []; // Temporary storage
    let left = low;      // Pointer for the left part
    let right = mid + 1; // Pointer for the right part

    // 1. Comparison logic (Captain's Rule)
    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            temp.push(arr[right]);
            right++;
        }
    }

    // 2. Extra elements check (Agar ek side khatam ho jaye)
    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    // 3. Very Important: Copy temp back to the ORIGINAL array slice
    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
}

function mergeSort(arr, low, high) {
    if (low >= high) return; // Base case: 1 element left

    let mid = Math.floor((low + high) / 2);

    mergeSort(arr, low, mid);      // Left Tukda
    mergeSort(arr, mid + 1, high); // Right Tukda

    merge(arr, low, mid, high);    // Jodo (Merge)
}

// Dry Run Example
const testArr = [9, 4, 7, 6, 3, 1, 5];
console.log("Original:", testArr);
mergeSort(testArr, 0, testArr.length - 1);
console.log("Sorted:", testArr);
