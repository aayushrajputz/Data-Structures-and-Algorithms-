/**
 * LeetCode 1652. Defuse the Bomb
 * 
 * Rules:
 * 1. If k > 0, replace the i-th number with the sum of the next k numbers.
 * 2. If k < 0, replace the i-th number with the sum of the previous |k| numbers.
 * 3. If k = 0, replace the i-th number with 0.
 * 
 * The array is circular.
 */
function decrypt(code, k) {
    const n = code.length;
    const result = new Array(n).fill(0);
    if (k === 0) return result;

    let L, R;

    if (k > 0) {
        L = 1;
        R = k;
    } else {
        k = -k
        L = n - k;
        R = n - 1;
    }

    let currentSum = 0;
    // Initial sum calculation
    for (let i = 0; i < k; i++) {
        currentSum += code[(L + i) % n];
    }

    for (let i = 0; i < n; i++) {
        result[i] = currentSum;
        currentSum -= code[L % n];
        L++;
        R++;
        currentSum += code[R % n];
    }

    return result;
}


// Test cases for your dry run:
console.log(decrypt([5, 7, 1, 4], 3)); // Expected: [12, 10, 16, 13]
console.log(decrypt([1, 2, 3, 4], 0)); // Expected: [0, 0, 0, 0]
console.log(decrypt([2, 4, 9, 3], -2)); // Expected: [12, 5, 6, 13]
