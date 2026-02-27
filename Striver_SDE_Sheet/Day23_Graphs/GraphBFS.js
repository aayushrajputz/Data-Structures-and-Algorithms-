/**
 * MISSION: BFS of Graph (GFG Match Version)
 * STRATEGY: Queue + Visited Checklist 🛡️
 */

class Solution {
    // GFG calls this 'bfs(adj)'
    bfs(adj) {
        let V = adj.length;
        let bfs = [];
        let visited = new Array(V).fill(false);
        let queue = [];

        // 1. Shuruat (Node 0)
        queue.push(0);
        visited[0] = true;

        while (queue.length > 0) {
            let node = queue.shift();
            bfs.push(node);

            // 2. Explore Neighbors
            let neighbors = adj[node];
            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
        return bfs;
    }
}
