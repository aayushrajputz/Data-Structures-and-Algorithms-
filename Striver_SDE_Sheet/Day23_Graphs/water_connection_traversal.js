/**
 * GFG: Water Connection Problem
 * Concept: Graph Traversal (Linear Chains)
 * Pattern: Identify nodes with Indegree 0 and Outdegree 1 (Tanks), 
 *          then follow the chain until Outdegree becomes 0 (Taps).
 */

class Solution {
    /**
     * @param {number} n - Number of houses
     * @param {number} p - Number of pipes
     * @param {number[]} a - List of source houses
     * @param {number[]} b - List of destination houses
     * @param {number[]} d - List of diameters
     * @return {number[][]} - Array of [Tank, Tap, MinDiameter]
     */
    solve(n, p, a, b, d) {
        let inDegree = new Array(n + 1).fill(0);
        let outDegree = new Array(n + 1).fill(0);
        let destinationNode = new Array(n + 1).fill(0);
        let edgeWeight = new Array(n + 1).fill(0);

        // 1. Map the connections and degrees
        for (let i = 0; i < p; i++) {
            let u = a[i];
            let v = b[i];
            let w = d[i];

            outDegree[u] = 1;
            inDegree[v] = 1;
            destinationNode[u] = v;
            edgeWeight[u] = w;
        }

        let result = [];

        // 2. Identify Tank (House with In=0, Out=1) and Start Traversal
        for (let i = 1; i <= n; i++) {
            if (inDegree[i] === 0 && outDegree[i] === 1) {
                let tank = i;
                let min_diameter = Infinity;
                let current = i;

                // Follow the single path until outDegree becomes 0
                while (outDegree[current] !== 0) {
                    min_diameter = Math.min(min_diameter, edgeWeight[current]);
                    current = destinationNode[current];
                }

                let tap = current;
                result.push([tank, tap, min_diameter]);
            }
        }

        return result;
    }
}

// Example test case:
// V=9, P=6
// a=[7,5,4,2,9,3], b=[4,9,6,8,7,1], d=[98,72,10,22,17,66]
// Expected Output: [[2, 8, 22], [3, 1, 66], [5, 6, 10]]
