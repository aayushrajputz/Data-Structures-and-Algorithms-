/**
 * Problem: The Celebrity Problem
 * Level: Medium/Hard
 * Pattern: Stack-based Elimination (O(N))
 * Platform Ready: GFG/LeetCode
 */

class Solution {
    // Function to find if there is a celebrity in the party or not.
    celebrity(mat) {
        let n = mat.length;
        let stack = [];

        // 1. Load the people into the stack
        for (let i = 0; i < n; i++) {
            stack.push(i);
        }

        // 2. Elimination Phase: Reduce candidates to one potential celebrity
        while (stack.length > 1) {
            let a = stack.pop();
            let b = stack.pop();

            // If a knows b, 'a' cannot be celebrity
            if (mat[a][b] === 1) {
                stack.push(b);
            } else {
                // If a doesn't know b, 'b' cannot be celebrity
                stack.push(a);
            }
        }

        // Potential candidate
        let candidate = stack.pop();

        // 3. Verification Phase: Double-check the candidate
        for (let i = 0; i < n; i++) {
            if (i !== candidate) {
                // Rules:
                // 1. Celebrity should NOT know anyone (mat[candidate][i] must be 0)
                // 2. EVERYONE must know the celebrity (mat[i][candidate] must be 1)
                if (mat[candidate][i] === 1 || mat[i][candidate] === 0) {
                    return -1; // Fraud!
                }
            }
        }

        return candidate; // King is here! 👑
    }
}

// --- LOCAL TESTING ---
const sol = new Solution();
const exampleMatrix = [
    [0, 1, 0],
    [0, 0, 0],
    [0, 1, 0]
];
console.log("Verdict for Local Test Matrix:", sol.celebrity(exampleMatrix));
