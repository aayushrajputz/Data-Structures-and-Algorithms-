/**
 * Problem: Coin Collector
 * Given a directed graph with N vertices and M edges. Each vertex has coins.
 * Find the maximum number of coins you can collect by starting from any vertex.
 * (If you enter an SCC, you can collect all coins in it.)
 */
function maxCoins(n, coins, edges) {
    let adj = Array.from({ length: n + 1 }, () => []);
    let adjRev = Array.from({ length: n + 1 }, () => [])
    for (let [u, v] of edges) {
        adj[u].push(v);
        adjRev[v].push(u)

    }

    let visited = Array(n + 1).fill(false);
    let finishStack = [];
    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            dfs(i, adj, visited, finishStack);
        }
    }
    visited.fill(false);
    let sccID = Array(n + 1).fill(-1)
    let sccWeights = [];
    let sccCount = 0;
    while (finishStack.length > 0) {
        let u = finishStack.pop()
        if (!visited[u]) {
            let currentSCC = [];
            let sccData = { totalCoins: 0, nodes: [] }
            dfs2(u, adjRev, visited, currentSCC, sccData)
            sccWeights[sccCount] = sccData.totalCoins;
            for (let node of currentSCC) {
                sccID[node] = sccCount;
            }
            sccCount++;

        }
    }
    let memo = Array(sccCount + 1).fill(-1);
    function solve(node) {
        if (memo[node] !== -1) {
            return memo[node]
        }
        let maxNext = 0;
        for (let nextNode of adjDAG[node]) {
            maxNext = Math.max(maxNext, solve(nextNode))
        }
        return memo[node] = sccWeights[node] + maxNext;
    }
    let adjDAG = Array.from({ length: sccCount + 1 }, () => new Set());
    for (let [u, v] of edges) {
        let idu = sccID[u];
        let idv = sccID[v];
        if (idu != idv) {
            adjDAG[idu].add(idv);
        }
    }
    let result = 0;
    for (let i = 0; i < sccCount; i++) {
        result = Math.max(result, solve(i));
    }

    return result;


    function dfs2(u, adjRev, visited, currentSCC, sccData) {
        visited[u] = true;
        currentSCC.push(u);
        sccData.totalCoins += coins[u - 1];
        sccData.nodes.push(u)
        for (let v of adjRev[u]) {
            if (!visited[v]) {
                dfs2(v, adjRev, visited, currentSCC, sccData);
            }
        }
    }

    function dfs(u, adj, visited, finishStack) {
        visited[u] = true;
        for (let v of adj[u]) {
            if (!visited[v]) {
                dfs(v, adj, visited, finishStack);
            }
        }
        finishStack.push(u);

    }
}