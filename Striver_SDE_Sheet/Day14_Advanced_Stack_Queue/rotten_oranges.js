/**
 * Problem: Rotten Oranges
 * Level: Medium/Hard
 * Pattern: BFS on 2D Grid
 * Time Complexity: O(R * C)
 * Space Complexity: O(R * C)
 */

function orangesRotting(grid) {
    if (!grid || grid.length === 0) return 0;

    let rows = grid.length;
    let cols = grid[0].length;
    let queue = [];
    let freshCount = 0;

    // 1. Initial Scan
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c, 0]); // [row, col, time]
            } else if (grid[r][c] === 1) {
                freshCount++;
            }
        }
    }

    let minutes = 0;
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]; // Right, Left, Down, Up

    // 2. BFS Spread
    while (queue.length > 0) {
        let [r, c, time] = queue.shift();
        minutes = time;

        for (let [dr, dc] of directions) {
            let nr = r + dr;
            let nc = c + dc;

            // If neighbor is within bounds and is a fresh orange
            if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] === 1) {
                grid[nr][nc] = 2; // Rot it
                freshCount--;
                queue.push([nr, nc, time + 1]);
            }
        }
    }

    return freshCount === 0 ? minutes : -1;
}

// --- TEST CASE ---
const grid = [
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1]
];
console.log("Initial Grid Representation (2=Rotten, 1=Fresh, 0=Empty):");
console.table(grid);

const totalTime = orangesRotting(grid);

if (totalTime === -1) {
    console.log("Result: All oranges cannot be rotten.");
} else {
    console.log(`Result: All oranges rotten in ${totalTime} minutes.`);
}
