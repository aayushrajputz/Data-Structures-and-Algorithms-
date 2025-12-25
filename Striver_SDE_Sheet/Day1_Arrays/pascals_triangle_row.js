/**
 * Pascal's Triangle Type 3: Generate a specific row (e.g., 6th row).
 * Logic: Use the property that each element depends on the previous one in the same row.
 * NextVal = PrevVal * (rowNumber - colIndex) / colIndex
 * Time Complexity: O(N)
 * Space Complexity: O(1) (excluding result)
 */

function generateSpecificRow(n) {
    let row = [];
    let ans = 1;
    row.push(1); // First element is always 1

    for (let i = 1; i < n; i++) {
        ans = ans * (n - i);
        ans = ans / i;
        row.push(ans);
    }
    return row;
}

// Test: 6th Row
let n = 6;
console.log(`The ${n}th row of Pascal's Triangle is:`);
console.log(generateSpecificRow(n)); // Expected: [1, 5, 10, 10, 5, 1]
