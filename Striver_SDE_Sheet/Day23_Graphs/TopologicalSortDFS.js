function topologicalSortDFS(V, edges) {
    let adj = Array.from({ length: V }, () => [])
    for (let [u, v] of edges) {
        adj[u].push(v)
    }
    let visited = []
    let stack = []
    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            dfs(i, adj, visited, stack)
        }
    }

    function dfs(node, adj, visited, stack) {
        visited[node] = true
        for (let it of adj[node]) {
            if (!visited[it]) {
                dfs(it, adj, visited, stack)
            }
        }
        stack.push(node)
    }
    let topo = []
    while (stack.length > 0) {
        topo.push(stack.pop())
    }
    return topo
}