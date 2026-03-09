/**
 * MISSION: Detect Cycle in Directed Graph using DFS
 * STRATEGY: Visited Array + PathVisited (Recursion Stack) Tracker 🛡️
 * TARGET: Finding loops in one-way systems 🔥
 */

class Solution {
    // Function to detect cycle in a directed graph.
    isCyclic(V, adj) {
        let visited = new Array(V).fill(false);
        let pathVisited = new Array(V).fill(false);

        // Handle Disconnected Components 🏝️🏹
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                if (this.checkCycleDFS(i, adj, visited, pathVisited)) {
                    return true;
                }
            }
        }
        return false;
    }

    checkCycleDFS(node, adj, visited, pathVisited) {
        visited[node] = true;
        pathVisited[node] = true; // Mark node as part of CURRENT recursion path 🧠🏹

        // Explore neighbors
        for (let neighbor of adj[node]) {
            // Case 1: Neighbor not visited yet
            if (!visited[neighbor]) {
                if (this.checkCycleDFS(neighbor, adj, visited, pathVisited)) {
                    return true;
                }
            }
            // Case 2: Neighbor visited AND part of CURRENT path! 🔄🚨
            else if (pathVisited[neighbor]) {
                return true; // CYCLE DETECTED!
            }
        }

        // BACKTRACKING: Return current path status to FALSE before leaving 🔙🛡️⚡
        pathVisited[node] = false;
        return false;
    }
}
