function kosaraju(V, adj) {
    let stack = []
    let visited = Array(V).fill(0)
    for (let i = 0; i < V; i++) {
        if (!visited[i]) {
            dfs(i, visited, adj, stack)
        }
    }
    function dfs(node, visited, adj, stack) {
        visited[node] = 1;
        for (let it of adj[node]) {
            if (!visited[it]) {
                dfs(it, visited, adj, stack)
            }
        }
        stack.push(node)
    }

    let adjT = Array(V).fill(0).map(() => []);
    for (let i = 0; i < V; i++) {
        for (let it of adj[i]) {
            adjT[it].push(i)
        }
    }

    function dfs2(node, visited, adjT, temp) {
        visited[node] = 1;
        temp.push(node);
        for (let it of adjT[node]) {
            if (!visited[it]) {
                dfs2(it, visited, adjT, temp)
            }
        }
    }

    visited = Array(V).fill(0)
    let ans = []
    while (stack.length > 0) {
        let node = stack.pop();
        if (!visited[node]) {
            let temp = []
            dfs2(node, visited, adjT, temp)
            ans.push(temp)
        }
    }
    return ans
}

// TEST CASE
// Graph: 0->2, 0->3, 1->0, 2->1, 3->4
// Expected SCCs: [0,1,2], [3], [4]
const V = 5;
const adj = [[2, 3], [0], [1], [4], []];
console.log('SCCs found:', kosaraju(V, adj));

module.exports = { kosaraju };