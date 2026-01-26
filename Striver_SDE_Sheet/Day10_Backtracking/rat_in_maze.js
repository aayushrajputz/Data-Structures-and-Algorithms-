/**
 * Problem: Rat in a Maze
 * Given an N x N matrix where 1 = path, 0 = blocked.
 * Find all paths from (0,0) to (N-1, N-1).
 * Directions: D (Down), L (Left), R (Right), U (Up) - Lexicographic Order
 * 
 * Approach: Backtracking (Same as Sudoku!)
 * 1. Start at (0,0).
 * 2. Try all 4 directions.
 * 3. Check isValid() before moving.
 * 4. Mark visited. Recurse.
 * 5. Backtrack (unmark visited).
 */

function findPaths(maze, n) {
    const result = [];
    const visited = Array.from({ length: n }, () => Array(n).fill(false));

    // Edge case: Start or End is blocked
    if (maze[0][0] === 0 || maze[n - 1][n - 1] === 0) {
        return result;
    }

    function isValid(row, col) {
        // Check: Within bounds + Path exists (1) + Not visited
        return (
            row >= 0 && row < n &&
            col >= 0 && col < n &&
            maze[row][col] === 1 &&
            !visited[row][col]
        );
    }

    function solve(row, col, path) {
        // Base Case: Reached destination!
        if (row === n - 1 && col === n - 1) {
            result.push(path);
            return;
        }

        // Mark current cell as visited
        visited[row][col] = true;

        // Try all 4 directions (D, L, R, U - Lexicographic Order!)
        // DOWN: row + 1
        if (isValid(row + 1, col)) {
            solve(row + 1, col, path + 'D');
        }
        // LEFT: col - 1
        if (isValid(row, col - 1)) {
            solve(row, col - 1, path + 'L');
        }
        // RIGHT: col + 1
        if (isValid(row, col + 1)) {
            solve(row, col + 1, path + 'R');
        }
        // UP: row - 1
        if (isValid(row - 1, col)) {
            solve(row - 1, col, path + 'U');
        }

        // BACKTRACK: Unmark visited
        visited[row][col] = false;
    }

    solve(0, 0, '');
    return result;
}

// Test Case
const maze = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1]
];
console.log(findPaths(maze, 4));
// Expected Output: ["DRDDRR", "DDRDRR"]
