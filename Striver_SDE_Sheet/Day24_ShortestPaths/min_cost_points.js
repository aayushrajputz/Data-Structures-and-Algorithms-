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
 * @param {number[][]} points
 * @return {number}
 */
var minCostConnectPoints = function (points) {
    let n = points.length;
    let edges = [];

    // STEP 1: Generate all possible edges between points (i, j)
    // Distance formula: Math.abs(x1 - x2) + Math.abs(y1 - y2)
    // edges.push([i, j, distance])

    // STEP 2: Sort edges by distance (index 2)

    // STEP 3: Initialize DisjointSet

    // STEP 4: Kruskal's - Iterate through edges, Union and add to minCost

    // STEP 5: Return total minCost
};

// TEST CASE
let points = [[0, 0], [2, 2], [3, 10], [5, 2], [7, 0]];
console.log("Min Cost:", minCostConnectPoints(points)); // Expected Output: 20
