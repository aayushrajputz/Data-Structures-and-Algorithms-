/**
 * Count Inversions using Merge Sort Logic
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */

function merge(arr, low, mid, high) {
    let temp = [];
    let left = low;
    let right = mid + 1;
    let cnt = 0;

    while (left <= mid && right <= high) {
        if (arr[left] <= arr[right]) {
            temp.push(arr[left]);
            left++;
        } else {
            // 1. TERA KAAM: Count inversions
            // Hint: mid - left + 1

            temp.push(arr[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(arr[left]);
        left++;
    }
    while (right <= high) {
        temp.push(arr[right]);
        right++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i - low];
    }
    return cnt;
}

function mergeSort(arr, low, high) {
    let cnt = 0;
    if (low >= high) return cnt;

    let mid = Math.floor((low + high) / 2);
    cnt += mergeSort(arr, low, mid);
    cnt += mergeSort(arr, mid + 1, high);
    cnt += merge(arr, low, mid, high);

    return cnt;
}

const testArr = [5, 3, 2, 4, 1];
console.log("Original Array:", testArr);
const result = mergeSort([...testArr], 0, testArr.length - 1);
console.log("Number of Inversions:", result);
// Expected for [5, 3, 2, 4, 1]:
// (5,3), (5,2), (5,4), (5,1), (3,2), (3,1), (2,1), (4,1) -> Total: 8
