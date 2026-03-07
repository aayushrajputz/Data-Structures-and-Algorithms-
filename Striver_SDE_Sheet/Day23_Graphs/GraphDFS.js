/**
 * MISSION: Depth First Search (DFS) in Graph
 * STRATEGY: Recursion (Internal Stack) + Visited Array 🛡️
 * TARGET: Deep Path Exploration (Exploring every island) 🔥
 */

class Solution {
    // Function to return a list containing the DFS traversal of the graph.
    dfsOfGraph(V, adj) {
        let visited = new Array(V).fill(false);
        let result = [];

        // Handle Disconnected Components (Islands) 🏝️🏹
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                this.dfsHelper(i, adj, visited, result);
            }
        }

        return result;
    }

    dfsHelper(node, adj, visited, result) {
        // 1. Mark the current node as visited and add to result 🎨
        visited[node] = true;
        result.push(node);

        // 2. Explore all neighbors recursively 🏹
        for (let it of adj[node]) {
            if (!visited[it]) {
                this.dfsHelper(it, adj, visited, result);
            }
        }
    }
}
