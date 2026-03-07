/**
 * MISSION: Detect Cycle in Undirected Graph using BFS
 * STRATEGY: Queue stores [node, parent] 🛡️
 * TARGET: Finding the loop in the system 🔥
 */

class Solution {
    // adj: adjacency list [ [], [], [] ]
    isCycle(V, adj) {
        let visited = new Array(V).fill(false);

        // Disconnected components ke liye loop chalana important hai! 🧱🧭
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                if (this.detectCycle(i, adj, visited)) {
                    return true;
                }
            }
        }
        return false;
    }

    detectCycle(src, adj, visited) {
        visited[src] = true;
        let queue = [];
        queue.push([src, -1]); // [node, parent]

        while (queue.length > 0) {
            let [node, parent] = queue.shift();

            for (let neighbor of adj[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push([neighbor, node]);
                } else if (parent !== neighbor) {
                    // YAHAN HAI ASALI CYCLE! 🔄🚨
                    // Node visited hai aur woh parent nahi hai!
                    return true;
                }
            }
        }
        return false;
    }
}
