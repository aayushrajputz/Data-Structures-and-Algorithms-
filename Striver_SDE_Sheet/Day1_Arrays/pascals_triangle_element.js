/**
 * Pascal's Triangle Type 2: Finding a specific element at Row R and Column C.
 * Formula: (r-1)C(c-1)
 * Time Complexity: O(c)
 * Space Complexity: O(1)
 */

function nCr(n, r) {
    let res = 1;
    // Calculation of nCr: n! / (r! * (n-r)!)
    // Optimized: (n * n-1 * ... * n-r+1) / (r * r-1 * ... * 1)
    for (let i = 0; i < r; i++) {
        res = res * (n - i);
        res = res / (i + 1);
    }
    return res;
}

function getPascalElement(r, c) {
    // Row and Col are usually 1-indexed in interviews
    return nCr(r - 1, c - 1);
}

// Test: Row 5, Col 3
let r = 5, c = 3;
console.log(`Element at Row ${r}, Col ${c} is: ${getPascalElement(r, c)}`); // Expected: 6
