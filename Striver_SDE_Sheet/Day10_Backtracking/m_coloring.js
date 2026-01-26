/**
 * Problem: M-Coloring
 * Given a graph and M colors, check if graph can be colored
 * such that no two adjacent nodes have the same color.
 * 
 * Approach: Backtracking (Same Pattern!)
 * 1. Start from node 0.
 * 2. Try colors 1 to M.
 * 3. Check if color is safe (no adjacent node has same color).
 * 4. If safe, assign and move to next node.
 * 5. If all nodes colored -> Return True.
 * 6. Backtrack if stuck.
 */

function graphColoring(graph, m, n) {
    // graph = adjacency matrix (n x n)
    // m = number of colors available
    // n = number of nodes

    const colors = Array(n).fill(0);  // colors[i] = color assigned to node i

    function isSafe(node, color) {
        // Check all adjacent nodes
        for (let neighbor = 0; neighbor < n; neighbor++) {
            // If there's an edge AND neighbor has same color -> NOT SAFE
            if (graph[node][neighbor] === 1 && colors[neighbor] === color) {
                return false;
            }
        }
        return true;
    }

    function solve(node) {
        // Base Case: All nodes colored!
        if (node === n) {
            return true;
        }

        // Try colors 1 to M
        for (let color = 1; color <= m; color++) {
            if (isSafe(node, color)) {
                colors[node] = color;  // Assign color

                if (solve(node + 1)) return true;  // Recurse

                colors[node] = 0;  // Backtrack
            }
        }

        return false;  // No color worked
    }

    return solve(0);
}

// Test Case
const graph = [
    [0, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 1],
    [1, 0, 1, 0]
];
const m = 3;  // 3 colors
const n = 4;  // 4 nodes

console.log(graphColoring(graph, m, n));  // Expected: true (3 colors are enough)
