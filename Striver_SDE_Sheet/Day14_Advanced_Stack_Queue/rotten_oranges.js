/**
 * Problem: Rotten Oranges
 * Pattern: BFS in a 2D Grid
 * Time Complexity: O(R * C)
 * Space Complexity: O(R * C)
 */

function orangesRotting(grid) {
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let queue = [];
    let freshCount = 0;

    // 1. Initialize Queue with all initial rotten oranges and count fresh ones
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c, 0]); // [row, col, time]
            } else if (grid[r][c] === 1) {
                freshCount++;
            }
        }
    }

    // If no fresh oranges, it takes 0 mins
    if (freshCount === 0) return 0;

    let time = 0;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // Up, Down, Left, Right

    // 2. BFS: Spread the rot level by level
    while (queue.length > 0) {
        let [r, c, t] = queue.shift();
        time = t;

        for (let [dr, dc] of directions) {
            let nr = r + dr;
            let nc = c + dc;

            // Check boundaries and if the orange is fresh
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                grid[nr][nc] = 2; // Infect to Rotten
                freshCount--;
                queue.push([nr, nc, t + 1]);
            }
        }
    }

    // 3. Check if any fresh oranges are left unreachable
    return freshCount === 0 ? time : -1;
}

// --- TEST CASE ---
const basket = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
];
console.log("Initial Grid:");
console.table(basket);

const result = orangesRotting(basket);
console.log(`Minutes required to rot all oranges: ${result}`);
