class Solution {
    kosaraju(V, edges) {
        // Step 0: Input edges ko "Adjacency List" (Graph) mein badlo
        let adj = Array.from({ length: V }, () => []);
        for (let [u, v] of edges) {
            adj[u].push(v);
        }

        let finishStack = []; // Nodes finish order mein yahan jayenge
        let visited = new Array(V).fill(0);

        // Step 1: Finish Order Nikalo (Iterative DFS)
        for (let i = 0; i < V; i++) {
            if (!visited[i]) {
                let callStack = [[i, 0]]; // [currentNode, nextNeighborToVisit]
                visited[i] = 1;

                while (callStack.length > 0) {
                    let current = callStack[callStack.length - 1];
                    let node = current[0];
                    let neighborIdx = current[1];
                    let neighbors = adj[node] || [];

                    if (neighborIdx < neighbors.length) {
                        current[1]++; // Agli baar agla neighbor uthana
                        let v = neighbors[neighborIdx];
                        if (!visited[v]) {
                            visited[v] = 1;
                            callStack.push([v, 0]);
                        }
                    } else {
                        // Jab saare neighbors visit ho jayein, toh node "Finish"
                        callStack.pop();
                        finishStack.push(node);
                    }
                }
            }
        }

        // Step 2: Graph ko Transpose (Reverse) karo
        let reverseAdj = Array.from({ length: V }, () => []);
        for (let [u, v] of edges) {
            reverseAdj[v].push(u); // Edge direction palti (u->v to v->u)
        }

        // Step 3: Reversed Graph par DFS karo Finish Order ke hisaab se
        let visited2 = new Array(V).fill(0);
        let sccCount = 0;

        while (finishStack.length > 0) {
            let node = finishStack.pop();
            if (!visited2[node]) {
                sccCount++;
                // Normal Iterative DFS for traversal
                let traversalStack = [node];
                visited2[node] = 1;
                while (traversalStack.length > 0) {
                    let curr = traversalStack.pop();
                    for (let neighbor of reverseAdj[curr]) {
                        if (!visited2[neighbor]) {
                            visited2[neighbor] = 1;
                            traversalStack.push(neighbor);
                        }
                    }
                }
            }
        }

        return sccCount;
    }
}