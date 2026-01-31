/**
 * Problem: The Celebrity Problem
 * Level: Hard (Optimized)
 * Pattern: Stack-based Elimination
 * Time Complexity: O(N)
 * Space Complexity: O(N) for stack
 */

function findCelebrity(M, n) {
    let stack = [];

    // 1. Push all people into the stack
    for (let i = 0; i < n; i++) {
        stack.push(i);
    }

    // 2. Eliminate candidates
    while (stack.length > 1) {
        let A = stack.pop();
        let B = stack.pop();

        // If A knows B, A cannot be a celebrity
        if (M[A][B] === 1) {
            stack.push(B);
        } else {
            // If A doesn't know B, B cannot be a celebrity
            stack.push(A);
        }
    }

    let potentialCeleb = stack.pop();

    // 3. Verification step
    for (let i = 0; i < n; i++) {
        if (i !== potentialCeleb) {
            // Celebrity should know NO ONE (Row should be 0)
            // EVERYONE should know Celebrity (Column should be 1)
            if (M[potentialCeleb][i] === 1 || M[i][potentialCeleb] === 0) {
                return -1; // No celebrity found
            }
        }
    }

    return potentialCeleb;
}

// --- TEST CASE ---
const matrix = [
    [0, 1, 0],
    [0, 0, 0], // Index 1 is the celebrity
    [0, 1, 0]
];
const n = 3;

console.log("Matrix:");
console.table(matrix);
const result = findCelebrity(matrix, n);

if (result === -1) {
    console.log("No Celebrity found.");
} else {
    console.log(`Celebrity identified at Index: ${result}`);
}
