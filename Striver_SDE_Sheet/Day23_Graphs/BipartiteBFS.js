function isBipartite(V, edges) {
    let adj = Array.from({ length: V }, () => [])
    let color = Array(V).fill(-1)
    for (let [u, v] of edges) {
        adj[u].push(v)
        adj[v].push(u)
    }

    for (let i = 0; i < V; i++) {
        if (color[i] === -1) {
            let queue = []
            queue.push(i)
            color[i] = 0
            while (queue.length > 0) {
                let node = queue.shift()
                for (let it of adj[node]) {
                    if (color[it] === -1) {
                        color[it] = 1 - color[node]
                        queue.push(it)
                    }
                    else if (color[it] === color[node]) {
                        return false
                    }
                }
            }
        }
    }
    return true


}