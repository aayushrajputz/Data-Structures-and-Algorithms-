/**
 * Problem: Matrix Median (Hard)
 * Requirement: O(log(2^32) * N * log(M)) 
 * 
 * Logic:
 * 1. The median element will have at least (N*M + 1) / 2 elements less than or equal to it.
 * 2. We search in the range [min_element, max_element].
 * 3. For each mid, we count how many elements in each row are <= mid using Binary Search.
 */

// Helper: Count elements <= x in a sorted row (Upper Bound)
function countSmallerThanMid(row, x) {
    let low = 0, high = row.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (row[mid] <= x) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}

function findMedian(matrix) {
    let n = matrix.length;
    let m = matrix[0].length;

    // Search space: Min possible value to Max possible value
    let low = 1;
    let high = 1e9;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let count = 0;

        // Step: Count all elements in matrix <= mid
        for (let i = 0; i < n; i++) {
            count += countSmallerThanMid(matrix[i], mid);
        }

        // Median Condition: 
        // Smallest number for which count of elements <= mid is GREATER than half the total elements.
        if (count <= Math.floor((n * m) / 2)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return low;
}

// Test Case
let matrix = [
    [1, 3, 5],
    [2, 6, 9],
    [3, 6, 9]
];
console.log("Matrix Median:", findMedian(matrix));
// Expected Output: 5
