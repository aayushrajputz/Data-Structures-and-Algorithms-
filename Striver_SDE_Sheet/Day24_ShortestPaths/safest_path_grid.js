function maximumSafenessFactor(grid) {
    const n = grid.length;
    const dist = Array.from({ length: n }, () => Array(n).fill(-1));
    const queue = [];

    // Stage 1: BFS Radar to calculate safeness for every cell
    for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
            if (grid[r][c] === 1) {
                dist[r][c] = 0;
                queue.push([r, c]);
            }
        }
    }

    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let head = 0; // O(1) Queue Pop Mechanism
    while (head < queue.length) {
        const [r, c] = queue[head++];
        for (const [dr, dc] of directions) {
            const nr = r + dr, nc = c + dc;
            if (nr >= 0 && nr < n && nc >= 0 && nc < n && dist[nr][nc] === -1) {
                dist[nr][nc] = dist[r][c] + 1;
                queue.push([nr, nc]);
            }
        }
    }

    // Checking if a path exists with at least 'minSafeness'
    function canReach(minSafeness) {
        if (dist[0][0] < minSafeness || dist[n - 1][n - 1] < minSafeness) return false;

        const q = [[0, 0]];
        const vis = Array.from({ length: n }, () => Array(n).fill(false));
        vis[0][0] = true;
        let qHead = 0;

        while (qHead < q.length) {
            const [r, c] = q[qHead++];
            if (r === n - 1 && c === n - 1) return true;

            for (const [dr, dc] of directions) {
                const nr = r + dr, nc = c + dc;
                if (nr >= 0 && nr < n && nc >= 0 && nc < n && !vis[nr][nc] && dist[nr][nc] >= minSafeness) {
                    vis[nr][nc] = true;
                    q.push([nr, nc]);
                }
            }
        }
        return false;
    }

    // Stage 2: Binary Search on Answer
    // Maximum possible safeness is N * 2
    let low = 0, high = n * 2, ans = 0;
    while (low <= high) {
        const mid = (low + high) >> 1; // Divide by 2
        if (canReach(mid)) {
            ans = mid;         // Path is possible, save it
            low = mid + 1;     // Try for more safeness
        } else {
            high = mid - 1;    // Path not possible, reduce target
        }
    }

    return ans;
}

module.exports = { maximumSafenessFactor };