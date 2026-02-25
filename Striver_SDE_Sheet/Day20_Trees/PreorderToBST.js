/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * MISSION: Construct BST from Preorder Traversal
 * STRATEGY: O(N) Upper Bound Logic 🛡️
 * TARGET: LeetCode 1008 🔥
 */
var bstFromPreorder = function (preorder) {
    let i = 0; // Global pointer for preorder array

    function build(bound) {
        // 1. Base Case: Array khatam ya value boundary se bahar
        if (i === preorder.length || preorder[i] > bound) {
            return null;
        }

        // 2. Element uthao aur root banao
        let root = new TreeNode(preorder[i++]);

        // 3. Left Subtree: Boundary current root ki value hogi
        root.left = build(root.val);

        // 4. Right Subtree: Boundary purani (Infinity ya parent ki) rahegi
        root.right = build(bound);

        return root;
    }

    return build(Infinity);
};

// --- BATTLE TEST ---
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

function inorder(node, res = []) {
    if (!node) return;
    inorder(node.left, res);
    res.push(node.val);
    inorder(node.right, res);
    return res;
}

let preorder = [8, 5, 1, 7, 10, 12];
let root = bstFromPreorder(preorder);
console.log("Inorder (Should be Sorted):", inorder(root));
