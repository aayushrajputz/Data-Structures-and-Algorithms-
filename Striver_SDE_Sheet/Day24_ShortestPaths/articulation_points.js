/**
 * Problem: Articulation Points in Graph (Tarjan's Algorithm)
 * Finding critical nodes that break the network.
 */

function findArticulationPoints(n, edges) {
    let adj = Array.from({ length: n + 1 }, () => []);
    for (let [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    let tin = Array(n + 1).fill(-1);
    let low = Array(n + 1).fill(-1);
    let visited = Array(n + 1).fill(false);
    let mark = Array(n + 1).fill(0); // Using array to mark articulation points
    let timer = 0;

    function dfs(u, p = -1) {
        visited[u] = true;
        tin[u] = low[u] = timer++;
        let child = 0;

        for (let v of adj[u]) {
            if (v === p) continue;

            if (!visited[v]) {
                dfs(v, u);
                low[u] = Math.min(low[u], low[v]);
                child++;

                // Step 1: Check articulation point condition
                if (low[v] >= tin[u] && p !== -1) {
                    mark[u] = 1;
                }
            } else {
                // Step 2: Back edge found
                low[u] = Math.min(low[u], tin[v]);
            }
        }

        // Step 3: Special case for Root
        if (p === -1 && child > 1) {
            mark[u] = 1;
        }
    }

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }

    let result = [];
    for (let i = 1; i <= n; i++) {
        if (mark[i] === 1) result.push(i);
    }
    return result;
}

// Test Case
const n = 5;
const edges = [[1, 2], [2, 3], [3, 4], [3, 5], [4, 5]];
console.log("Articulation Points:", findArticulationPoints(n, edges)); // Node 3 is critical
