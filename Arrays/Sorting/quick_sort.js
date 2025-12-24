/**
 * Quick Sort Implementation
 * 
 * Logic: Divide & Conquer
 * 1. Pick a pivot (Hoare's uses the first element or middle, we'll use first).
 * 2. Partition: Rearrange the array so that elements less than pivot are on left, 
 *    and elements greater than pivot are on right.
 * 3. Recursively apply to left and right halves.
 * 
 * Time Complexity: 
 * - Best/Average: O(N log N)
 * - Worst: O(N^2) (When array is already sorted and we pick first/last element as pivot)
 * 
 * Space Complexity: O(log N) for recursion stack.
 */

function quickSort(arr, low = 0, high = arr.length - 1) {
    if (low < high) {
        // Partition the array and get the split point
        let p = partition(arr, low, high);

        // Recursively sort elements before and after partition
        // Note: Hoare's partition returns 'p' such that arr[low...p] and arr[p+1...high] are the halves
        quickSort(arr, low, p);
        quickSort(arr, p + 1, high);
    }
    return arr;
}

/**
 * Hoare's Partition Scheme
 * More efficient than Lomuto because it does fewer swaps on average.
 */
function partition(arr, low, high) {
    let pivot = arr[low];
    let i = low - 1;
    let j = high + 1;

    while (true) {
        // Move i to the right as long as arr[i] < pivot
        do {
            i++;
        } while (arr[i] < pivot);

        // Move j to the left as long as arr[j] > pivot
        do {
            j--;
        } while (arr[j] > pivot);

        // If pointers cross, partitioning is done
        if (i >= j) return j;

        // Swap elements at i and j
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

// Test Cases
const testArrays = [
    [5, 3, 8, 4, 2, 7, 1, 10],
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [2, 2, 2, 2],
    [10, -1, 2, 5, 0, 6, 4, -5]
];

console.log("--- Quick Sort Verification ---");
testArrays.forEach((arr, index) => {
    const original = [...arr];
    const sorted = quickSort(arr);
    console.log(`Test ${index + 1}: [${original.join(', ')}] => [${sorted.join(', ')}]`);
});
