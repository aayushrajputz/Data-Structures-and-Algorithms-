/**
 * MISSION: Find the Size of the Largest BST in a Binary Tree
 * STRATEGY: Bottom-Up (Postorder) Communication 🛡️
 * TARGET: GFG / Striver Day 21 🔥
 */

class NodeInfo {
    constructor(isBST, size, min, max) {
        this.isBST = isBST;
        this.size = size;
        this.min = min;
        this.max = max;
    }
}

var largestBST = function (root) {
    let maxSize = 0;

    function solve(node) {
        // 1. Base Case: Khali node ek BST hai jiska size 0 hai
        if (!node) {
            return new NodeInfo(true, 0, Infinity, -Infinity);
        }

        // 2. Left aur Right se report mangwao (Postorder)
        let left = solve(node.left);
        let right = solve(node.right);

        // 3. Current Node pe check karo
        let current = new NodeInfo();
        current.size = left.size + right.size + 1;
        current.min = Math.min(node.val, left.min);
        current.max = Math.max(node.val, right.max);

        // BST Validation:
        if (left.isBST && right.isBST && node.val > left.max && node.val < right.min) {
            current.isBST = true;
            maxSize = Math.max(maxSize, current.size);
        } else {
            current.isBST = false;
        }

        return current;
    }

    solve(root);
    return maxSize;
};

// --- BATTLE TEST ---
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Tree: 10 -> (5, 15), 5 -> (1, 8), 15 -> (null, 7)
// Largest BST here should be (5 -> 1, 8) with size 3.
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(8);
root.right.right = new TreeNode(7);

console.log("Size of Largest BST (Should be 3):", largestBST(root));
