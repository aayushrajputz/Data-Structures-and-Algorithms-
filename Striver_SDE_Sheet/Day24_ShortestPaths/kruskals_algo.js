class DisjointSet {
    constructor(n) {
        this.parent = Array.from({ length: n + 1 }, (_, i) => i);
        this.size = new Array(n + 1).fill(1);
    }

    find(node) {
        if (this.parent[node] === node) return node;
        return this.parent[node] = this.find(this.parent[node]);
    }

    unionBySize(u, v) {
        let ulp = this.find(u);
        let ulu = this.find(v);
        if (ulp === ulu) return;
        if (this.size[ulp] < this.size[ulu]) {
            this.parent[ulp] = ulu;
            this.size[ulu] += this.size[ulp];
        } else {
            this.parent[ulu] = ulp;
            this.size[ulp] += this.size[ulu];
        }
    }
}

function minimumSpanningTree(n, edges) {
    edges.sort((a, b) => a[2] - b[2]);
    const ds = new DisjointSet(n);
    let mstWeight = 0;
    let edgesCount = 0;

    for (let [u, v, w] of edges) {
        if (ds.find(u) !== ds.find(v)) {
            ds.unionBySize(u, v);
            mstWeight += w;
            edgesCount++;
        }
    }
    return edgesCount === n - 1 ? mstWeight : -1;

}
// TEST CASE
const V = 5;
const testEdges = [
    [0, 1, 2],
    [0, 2, 1],
    [1, 2, 1],
    [2, 3, 2],
    [3, 4, 1]
];
console.log("MST Weight:", minimumSpanningTree(V, testEdges)); // Expected: 5