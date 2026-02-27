/**
 * MISSION: Depth First Search (DFS) in Graph
 * STRATEGY: Recursion (Stack) + Visited Array 🛡️
 * TARGET: Deep Path Exploration 🔥
 */

class Solution {
    // Function to return a list containing the DFS traversal of the graph.
    dfsOfGraph(V, adj) {
        let vis = new Array(V).fill(false);
        let ls = [];

        // DFS starting from 0
        this.dfs(0, adj, vis, ls);

        return ls;
    }

    dfs(node, adj, vis, ls) {
        // 1. Mark visited and add to result
        vis[node] = true;
        ls.push(node);

        // 2. Explore neighbors recursively
        for (let it of adj[node]) {
            if (!vis[it]) {
                this.dfs(it, adj, vis, ls);
            }
        }
    }
}
