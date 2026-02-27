/**
 * MISSION: Graph Representation (Adjacency List)
 * STRATEGY: Array of Arrays 🛡️
 * TARGET: Understanding Vertices & Edges 🔥
 */

function createGraph(n, edges) {
    // 1. Array banaye (Size n+1 taaki index clear rahe)
    let adj = Array.from({ length: n + 1 }, () => []);

    // 2. Edges ko bharo
    for (let [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u); // Undirected ke liye dono taraf connection
    }

    return adj;
}

// BATTLE TEST
const N = 5;
const E = 6;
const edges = [[1, 2], [1, 3], [2, 4], [3, 4], [2, 5], [4, 5]];

const adjacencyList = createGraph(N, edges);

console.log("Adjacency List Representation:");
for (let i = 1; i <= N; i++) {
    console.log(`${i} -> ${adjacencyList[i].join(", ")}`);
}
