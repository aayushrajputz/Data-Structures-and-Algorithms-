class Solution {
    findMotherVertex(V, edges) {
        // Edge list ko adjacency list mein convert karo
        let adj = Array.from({ length: V }, () => []);
        for (let [u, v] of edges) {
            adj[u].push(v);
        }

        let visited = Array(V).fill(0);
        let lastFinishedNode = -1;

        function dfs(u) {
            visited[u] = 1;
            for (let v of adj[u]) {
                if (!visited[v]) dfs(v);
            }
            lastFinishedNode = u;
        }

        // Step 1: Last finished node dhundo
        for (let i = 0; i < V; i++) {
            if (!visited[i]) dfs(i);
        }

        // Step 2: Verify karo
        visited.fill(0);
        let count = 0;

        function dfsCount(u) {
            visited[u] = 1;
            count++;
            for (let v of adj[u]) {
                if (!visited[v]) dfsCount(v);
            }
        }

        dfsCount(lastFinishedNode);
        return count === V ? lastFinishedNode : -1;
    }
}