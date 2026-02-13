class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Lowest Common Ancestor (LCA) of Binary Tree
 * STRATEGY: Bottom-up Recursive Discovery 🚩
 * TARGET: LeetCode 236 / Google / Amazon / Microsoft 🔥💀
 */
function lowestCommonAncestor(root, p, q) {
    // 1. Base Case: If node is found or we hit null
    if (root === null || root === p || root === q) {
        return root;
    }

    // 2. Search in subtrees
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);

    // 3. Result Consolidation
    if (left === null) return right; // Found on right or nowhere
    if (right === null) return left; // Found on left or nowhere

    // Both sides found? This node is the LCA!
    return root;
}

// BATTLE FIELD
let root = new Node(3);
root.left = new Node(5);
root.right = new Node(1);
root.left.left = new Node(6);
root.left.right = new Node(2);
root.left.right.left = new Node(7);
root.left.right.right = new Node(4);
root.right.left = new Node(0);
root.right.right = new Node(8);

let p = root.left; // Node 5
let q = root.right; // Node 1

let lca = lowestCommonAncestor(root, p, q);
console.log("LCA of 5 and 1 is:", lca.data);

let p2 = root.left.left; // Node 6
let q2 = root.left.right.right; // Node 4
let lca2 = lowestCommonAncestor(root, p2, q2);
console.log("LCA of 6 and 4 is:", lca2.data);
