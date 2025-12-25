/**
 * Striver SDE Sheet - Problem 2: Pascal's Triangle
 * 
 * Logic: 
 * Each element is the sum of the two elements above it.
 * matrix[i][j] = matrix[i-1][j-1] + matrix[i-1][j]
 */

function generatePascal(numRows) {
    let triangle = [];

    for (let i = 0; i < numRows; i++) {
        let row = new Array(i + 1).fill(1); // Pehla aur aakhri hamesha 1 hote hain

        // Beech wale elements calculate karo (starting from index 1 to i-1)
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }

        triangle.push(row);
    }

    return triangle;
}

// Test Case
let n = 5;
console.log(`Pascal's Triangle for ${n} rows:`);
console.table(generatePascal(n));
