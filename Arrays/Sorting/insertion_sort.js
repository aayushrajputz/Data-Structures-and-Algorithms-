/**
 * Insertion Sort Logic:
 * Take an element and place it in its correct position in the sorted part.
 * Time Complexity: O(n^2) - Worst/Average, O(n) - Best Case (already sorted)
 * Space Complexity: O(1)
 */

function insertionSort(arr) {
    let n = arr.length;
    let temp = 0;
    for (let i = 0; i < n; i++) {
        let j = i;
        // WHILE loop tab tak chalega jab tak hum shuruat tak na pahunch jayein
        // AUR jab tak pichla element bada hai.
        while (j > 0 && arr[j] < arr[j - 1]) {
            temp = arr[j];
            arr[j] = arr[j - 1];
            arr[j - 1] = temp;
            j--;
        }
    }
    return arr;
}

const testArr = [13, 46, 24, 52, 20, 9];
console.log("Original:", testArr);
console.log("Sorted:", insertionSort(testArr));
