/**
 * MISSION: Detect Cycle in Undirected Graph using DFS
 * STRATEGY: Recursion with Parent Tracker 🛡️
 * TARGET: Finding the loop in the deep paths 🔥
 */

class Solution {
    isCycle(V, adj) {
        let visited = new Array(V).fill(false);

        // Handle Disconnected Components 🏝️🏹
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                if (this.dfsCheck(i, -1, visited, adj)) {
                    return true;
                }
            }
        }
        return false;
    }

    dfsCheck(node, parent, visited, adj) {
        visited[node] = true;

        for (let neighbor of adj[node]) {
            if (!visited[neighbor]) {
                // Recursive call: current node becomes the parent for the neighbor! 🛡️⚡
                if (this.dfsCheck(neighbor, node, visited, adj)) {
                    return true;
                }
            } else if (neighbor !== parent) {
                // YAHAN HAI ASALI CYCLE! 🔄🚨
                // Node visited hai aur woh parent nahi hai!
                return true;
            }
        }
        return false;
    }
}
