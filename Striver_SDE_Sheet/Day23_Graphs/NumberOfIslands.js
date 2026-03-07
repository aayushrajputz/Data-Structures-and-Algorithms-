/**
 * MISSION: Number of Islands (LeetCode 200)
 * STRATEGY: DFS/BFS Invasion across 2D Grid 🏝️
 * TARGET: Finding connected components in 4 directions 🔥
 */

class Solution {
    numIslands(grid) {
        if (!grid || grid.length === 0) return 0;

        let rows = grid.length;
        let cols = grid[0].length;
        let count = 0;

        // 🛡️ Loop through every cell in the matrix
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                // If we find an unvisited land ('1')
                if (grid[i][j] === '1') {
                    count++; // New Island found!
                    this.invade(grid, i, j); // Sink/Mark all connected parts
                }
            }
        }

        return count;
    }

    invade(grid, r, c) {
        let rows = grid.length;
        let cols = grid[0].length;

        // 🛡️ Boundary Checks (Safety Filter)
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {
            return;
        }

        // 🎨 Mark as visited (Sinking the land to avoid revisiting)
        grid[r][c] = '0';

        // 🏹 Explore in 4 directions (Arrow Exploration)
        this.invade(grid, r + 1, c); // Down
        this.invade(grid, r - 1, c); // Up
        this.invade(grid, r, c + 1); // Right
        this.invade(grid, r, c - 1); // Left
    }
}
