/**
 * MISSION: Disjoint Set Union (DSU) - The Ultimate Connectivity Weapon
 * USAGE: Kruskal's, Cycle Detection, Dynamic Connectivity
 */

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
const ds = new DisjointSet(8);
ds.unionBySize(1, 2);
ds.unionBySize(2, 3);
ds.unionBySize(4, 5);
ds.unionBySize(6, 7); // (Use n=8 if you want node 7)

console.log("Is 3 and 7 same?", ds.find(3) === ds.find(7) ? "Yes" : "No");

ds.unionBySize(3, 7);
console.log("After union (3,7), is 3 and 7 same?", ds.find(3) === ds.find(7) ? "Yes" : "No");

