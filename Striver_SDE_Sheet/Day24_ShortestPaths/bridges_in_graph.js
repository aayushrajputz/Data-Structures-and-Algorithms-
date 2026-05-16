/**
 * Problem: Bridges in Graph (Tarjan's Algorithm)
 * Finding critical connections in a network.
 */

function findBridges(n, edges) {
    let adj = Array.from({ length: n + 1 }, () => []);
    for (let [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u); // Undirected Graph
    }

    let tin = Array(n + 1).fill(-1); // Time of Insertion
    let low = Array(n + 1).fill(-1); // Lowest Insertion Time reachable
    let visited = Array(n + 1).fill(false);
    let timer = 0;
    let bridges = [];

    function dfs(u, p = -1) {
        visited[u] = true;
        tin[u] = low[u] = timer++;

        for (let v of adj[u]) {
            if (v === p) continue; // Don't go back to parent

            if (!visited[v]) {
                dfs(v, u);
                // Step 2: Winding back, update low value of u from child v
                low[u] = Math.min(low[u], low[v]);

                // Step 3: Check if edge u-v is a bridge
                if (low[v] > tin[u]) {
                    bridges.push([u, v]);
                }
            } else {
                // Step 4: Back edge found, update low value from an already visited node
                low[u] = Math.min(low[u], tin[v]);
            }
        }
    }

    // Start DFS for all components
    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            dfs(i);
        }
    }

    return bridges;
}

// Test Case
const n = 4;
const edges = [[1, 2], [2, 3], [3, 4], [1, 3]];
console.log("Bridges:", findBridges(n, edges)); // Edge [3, 4] is a bridge
