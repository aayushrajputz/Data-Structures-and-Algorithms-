/**
 * MISSION: Find K-th Smallest and Largest element in a BST
 * STRATEGY: Inorder (Smallest) and Reverse Inorder (Largest) 🛡️
 * TARGET: LeetCode 230 / Striver Day 21 🔥
 */

var kthSmallest = function (root, k) {
    let count = 0;
    let result = -1;

    function inorder(node) {
        if (!node || result !== -1) return;

        // 1. Left
        inorder(node.left);

        // 2. Root (The Counter Part)
        count++;
        if (count === k) {
            result = node.val;
            return;
        }

        // 3. Right
        inorder(node.right);
    }

    inorder(root);
    return result;
};

var kthLargest = function (root, k) {
    let count = 0;
    let result = -1;

    function reverseInorder(node) {
        if (!node || result !== -1) return;

        // 1. Right (Badi values pehle)
        reverseInorder(node.right);

        // 2. Root
        count++;
        if (count === k) {
            result = node.val;
            return;
        }

        // 3. Left
        reverseInorder(node.left);
    }

    reverseInorder(root);
    return result;
};

// --- BATTLE TEST ---
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Tree: 10 -> (5, 15), 5 -> (2, 8)
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(8);

console.log("3rd Smallest (Should be 8):", kthSmallest(root, 3));
console.log("2nd Largest (Should be 10):", kthLargest(root, 2));
