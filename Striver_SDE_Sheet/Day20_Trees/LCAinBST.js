/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * MISSION: Lowest Common Ancestor in a BST
 * STRATEGY: Iterative Directional Split 🛡️
 * TARGET: LeetCode 235 / Amazon / Google 🔥
 */
var lowestCommonAncestor = function (root, p, q) {
    let curr = root;

    while (curr !== null) {
        // Option 1: Both nodes in the left subtree
        if (p.val < curr.val && q.val < curr.val) {
            curr = curr.left;
        }
        // Option 2: Both nodes in the right subtree
        else if (p.val > curr.val && q.val > curr.val) {
            curr = curr.right;
        }
        // Option 3: Split point found or one node is the ancestor of the other
        else {
            return curr;
        }
    }
    return null;
};

// --- BATTLE TEST SIMULATION ---
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let root = new TreeNode(6);
root.left = new TreeNode(2);
root.right = new TreeNode(8);
root.left.left = new TreeNode(0);
root.left.right = new TreeNode(4);
root.right.left = new TreeNode(7);
root.right.right = new TreeNode(9);
root.left.right.left = new TreeNode(3);
root.left.right.right = new TreeNode(5);

let p = root.left; // 2
let q = root.right; // 8
console.log("LCA of 2 and 8 (Expected 6):", lowestCommonAncestor(root, p, q).val);

let p2 = root.left; // 2
let q2 = root.left.right; // 4
console.log("LCA of 2 and 4 (Expected 2):", lowestCommonAncestor(root, p2, q2).val);
