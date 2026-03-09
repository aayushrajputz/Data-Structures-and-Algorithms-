/**
 * MISSION: Clone Graph (LeetCode 133)
 * STRATEGY: DFS + HashMap (Memory Mapping) 🛡️
 * TARGET: Deep Copy without Infinite Loops 🔥
 */

// Definition for a Node.
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
}

class Solution {
    constructor() {
        this.map = new Map(); // Global Map to keep track of clones: [OriginalNode -> CloneNode]
    }

    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if (!node) return null;

        // 1. Check if we already cloned this node 🛡️
        if (this.map.has(node)) {
            return this.map.get(node); // Return the existing clone to break cycle
        }

        // 2. Create the Clone (New memory, same value) 🎨
        let clone = new Node(node.val);
        this.map.set(node, clone); // Register in the map immediately!

        // 3. Clone all neighbors recursively 🏹
        for (let neighbor of node.neighbors) {
            clone.neighbors.push(this.cloneGraph(neighbor));
        }

        return clone;
    }
}
