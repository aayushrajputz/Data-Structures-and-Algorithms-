function isBipartiteDFS(graph) {
    let V = graph.length
    let color = Array(V).fill(-1)
    for (let i = 0; i < V; i++) {
        if (color[i] === -1) {
            if (dfs(i, 0, color, graph) === false) {
                return false
            }
        }
    }
    return true
}

function dfs(node, c, color, graph) {
    color[node] = c
    for (let it of graph[node]) {
        if (color[it] === -1) {
            if (dfs(it, 1 - c, color, graph) === false) {
                return false
            }
        }
        else if (color[it] === color[node]) {
            return false
        }
    }
    return true
}

// ---- TEST CASES ----
let graph1 = [[1, 2, 3], [0, 2], [0, 1, 3], [0, 2]]; // Contains odd cycle
console.log("Test Case 1 (Non-Bipartite):", isBipartiteDFS(graph1), "| Expected: false");

let graph2 = [[1, 3], [0, 2], [1, 3], [0, 2]]; // Even cycles only
console.log("Test Case 2 (Bipartite):", isBipartiteDFS(graph2), "| Expected: true");