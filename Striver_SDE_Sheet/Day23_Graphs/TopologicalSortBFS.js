class Solution {
    topoSort(V, edges) {

        let adj = Array.from({ length: V }, () => []);
        let inDegree = new Array(V).fill(0);

        // build adjacency list
        for (let [u, v] of edges) {
            adj[u].push(v);
            inDegree[v]++;
        }

        let queue = [];
        for (let i = 0; i < V; i++) {
            if (inDegree[i] === 0) {
                queue.push(i);
            }
        }

        let ans = [];

        while (queue.length > 0) {
            let curr = queue.shift();
            ans.push(curr);

            for (let node of adj[curr]) {
                inDegree[node]--;
                if (inDegree[node] === 0) {
                    queue.push(node);
                }
            }
        }

        return ans;
    }
}

// ----------------- TEST CASE -----------------
// Graph: 
// 0 -> []
// 1 -> []
// 2 -> [3]
// 3 -> [1]
// 4 -> [0, 1]
// 5 -> [0, 2]
let V = 6;
let adj = [
    [],        // 0
    [],        // 1
    [3],       // 2
    [1],       // 3
    [0, 1],    // 4
    [0, 2]     // 5
];

console.log("Titan's Topological Sort Output:");
console.log(topologicalSortBFS(V, adj));
// Expected Output: Possible valid sorts: [4, 5, 2, 0, 3, 1] or [5, 4, 2, 3, 1, 0] etc.
