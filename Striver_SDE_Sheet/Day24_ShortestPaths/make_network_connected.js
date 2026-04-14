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

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function (n, connections) {
    if (connections.length < n - 1) return -1;

    const ds = new DisjointSet(n);

    for (let [u, v] of connections) {
        ds.unionBySize(u, v);

    }
    let components = 0;
    for (let i = 0; i < n; i++) {
        if (ds.parent[i] === i) components++
    }

    return components - 1;

};

// TEST CASE
let n = 4;
let connections = [[0, 1], [0, 2], [1, 2]];
console.log("Min operations:", makeConnected(n, connections)); // Expected Output: 1
