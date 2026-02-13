class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Check if Binary Tree is Balanced
 * STRATEGY: Optimized O(N) using -1 failure signal
 * TARGET: LeetCode 110 🔥
 */
function isBalanced(root) {
    function checkHeight(node) {
        if (!node) return 0;

        let lh = checkHeight(node.left);
        if (lh === -1) return -1; // Propagate failure

        let rh = checkHeight(node.right);
        if (rh === -1) return -1; // Propagate failure

        // Check current node balance
        if (Math.abs(lh - rh) > 1) return -1;

        // Return height if balanced
        return 1 + Math.max(lh, rh);
    }

    let result = checkHeight(root);
    let isBalanced = result !== -1;

    console.log("Is Tree Balanced?", isBalanced);
    return isBalanced;
}

// BATTLE FIELD
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.left.left = new Node(5); // Creating imbalance

isBalanced(root);
