// Bellman-Ford Algorithm - Core Fintech Routing
// Target: Detect Negative Cycles (Arbitrage/Fraud in systems) 

function bellmanFord(n, edges, src) {
    let dist = new Array(n).fill(Infinity);
    dist[src] = 0;

    for (let i = 0; i < n - 1; i++) {
        for (let [u, v, weight] of edges) {
            if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
                dist[v] = dist[u] + weight;
            }
        }
    }
    for (let [u, v, weight] of edges) {
        if (dist[u] !== Infinity && dist[u] + weight < dist[v]) {
            return [-1]
        }
    }

    return dist;

}                               