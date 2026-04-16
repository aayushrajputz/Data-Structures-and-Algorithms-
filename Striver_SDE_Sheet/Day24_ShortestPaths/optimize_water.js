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
        if (ulp === ulu) {
            return;
        }
        if (this.size[ulp] < this.size[ulu]) {
            this.parent[ulp] = ulu;
            this.size[ulu] += this.size[ulp];
        } else {
            this.parent[ulu] = ulp;
            this.size[ulp] += this.size[ulu];
        }
        return this.parent;
    }

}

function minCostToSupplyWater(n, wells, pipes) {
    let edges = [];
    for (let i = 0; i < wells.length; i++) {
        edges.push([0, i + 1, wells[i]])
    }
    edges.push(...pipes);
    edges.sort((a, b) => a[2] - b[2]);
    let ds = new DisjointSet(n);
    let cost = 0;
    for (let [u, v, w] of edges) {
        if (ds.find(u) !== ds.find(v)) {
            ds.unionBySize(u, v);
            cost = cost + w
        }
    }
    return cost;
}

// TEST CASE
let n = 3, wells = [1, 2, 2], pipes = [[1, 2, 1], [2, 3, 1]];
console.log("Min Cost:", minCostToSupplyWater(n, wells, pipes)); // Expected: 3
