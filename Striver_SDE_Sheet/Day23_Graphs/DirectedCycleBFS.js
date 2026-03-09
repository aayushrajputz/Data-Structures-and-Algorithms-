class Solution {
    directedCycleBFS(V, edges) {
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

        // TITAN TACTIC: If length is not equal to V, some nodes were left behind due to a cycle!
        return ans.length !== V;
    }
}

// ----------------- TEST CASE -----------------
// Cycle Graph: 
// 0 -> 1 -> 2 -> 0 (Cycle here)
// 3 -> 4
let V_cycle = 5;
let edges_cycle = [
    [0, 1], [1, 2], [2, 0], [3, 4]
];

// No-Cycle Graph:
// 0 -> 1 -> 2
// 0 -> 2
let V_no_cycle = 3;
let edges_no_cycle = [
    [0, 1], [1, 2], [0, 2]
];

const sol = new Solution();
console.log("Cycle Check (Should be true):", sol.directedCycleBFS(V_cycle, edges_cycle));
console.log("Cycle Check (Should be false):", sol.directedCycleBFS(V_no_cycle, edges_no_cycle));