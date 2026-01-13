/**
 * Problem: K-th Permutation Sequence (Striver SDE Sheet Day 9)
 * Goal: Given n and k, return the kth permutation sequence.
 * Optimal Approach: Mathematics (Factorial blocks)
 * Time Complexity: O(N^2) (due to list removal)
 * Space Complexity: O(N)
 */

function getPermutation(n, k) {
    let fact = 1;
    const numbers = [];

    // 1. Precalculate (n-1) factorial and fill the numbers list
    for (let i = 1; i < n; i++) {
        fact = fact * i;
        numbers.push(i);
    }
    numbers.push(n); // numbers = [1, 2, 3, ..., n]

    // 2. Adjust k to 0-indexed
    k = k - 1;
    let result = "";

    // 3. Find digit by digit
    while (true) {
        // Find which 'block' k falls into
        let index = Math.floor(k / fact);
        result += numbers[index];

        // Remove the used number
        numbers.splice(index, 1);

        // If no more numbers are left, break
        if (numbers.length === 0) break;

        // Update k for the next block
        k = k % fact;

        // Update factorial for the next size (e.g., from 3! to 2!)
        fact = fact / numbers.length;
    }

    return result;
}

// TEST CASE
const n = 3, k = 3;
console.log(`n=${n}, k=${k} -> Result: "${getPermutation(n, k)}"`);
// Expected: "213"
