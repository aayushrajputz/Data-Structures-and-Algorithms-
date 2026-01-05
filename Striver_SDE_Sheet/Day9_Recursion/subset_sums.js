/**
 * Problem: Subset Sums (Striver SDE Sheet Day 9)
 * Goal: Print all subset sums in increasing order.
 * 
 * Pattern: Pick and Not Pick (Recursion)
 */

function subsetSums(arr) {
    let n = arr.length;
    let result = [];

    /**
     * Recursive Helper Function
     * @param {number} index - Current element we are considering
     * @param {number} currentSum - Sum accumulated so far
     */
    function solve(index, currentSum) {
        // 1. BASE CASE: If we've considered all elements
        if (index === n) {
            result.push(currentSum);
            return;
        }

        // 2. PICK the current element
        solve(index + 1, currentSum + arr[index]);

        // 3. NOT PICK the current element
        solve(index + 1, currentSum);
    }

    // Initial call: Start from index 0 with sum 0
    solve(0, 0);

    // Sorting the result as per standard problem requirement
    result.sort((a, b) => a - b);
    return result;
}

// --- Test Case (The Titan's Validation) ---
const inputArr = [3, 1, 2];
console.log("Input Array:", inputArr);
const sums = subsetSums(inputArr);
console.log("Subset Sums:", sums);

/**
 * Logic Visualization for [3, 1, 2]:
 * Total Subsets = 2^3 = 8
 * 
 * Tree looks like:
 *                   (0,0)
 *               /          \
 *            Pick 3        Not 3
 *            (1,3)         (1,0)
 *           /     \       /     \
 *        Pick 1  Not 1  Pick 1  Not 1
 *        (2,4)   (2,3)  (2,1)   (2,0)
 *        ... and so on for index 2 (element 2)
 */
