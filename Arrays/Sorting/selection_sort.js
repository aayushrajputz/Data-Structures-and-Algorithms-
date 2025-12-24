/**
 * Selection Sort Logic:
 * Find the minimum element in the unsorted part and put it at the beginning.
 * Time Complexity: O(n^2)
 * Space Complexity: O(1)
 */

function selectionSort(arr) {
    let n = arr.length;
    let temp = 0;

    for (let i = 0; i < n - 1; i++) {
        // 1. Assume current index i is where the minimum should go
        let mini = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[mini]) {
                mini = j;
            }
        }
        // 3. Swap after finding the minimum
        let temp = arr[mini];
        arr[mini] = arr[i];
        arr[i] = temp;
    }
    return arr;


}

const testArr = [13, 46, 24, 52, 20, 9, -1];
console.log("Original:", testArr);
console.log("Sorted:", selectionSort(testArr));
