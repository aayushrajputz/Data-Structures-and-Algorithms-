class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Maximum Path Sum of Binary Tree
 * STRATEGY: Optimized O(N) Profit Calculation 📈
 * TARGET: LeetCode 124 (HARD) / Google / Meta 🔥💀
 */
function maxPathSum(root) {
    let maxSum = -Infinity; // Values can be negative, so start with -Infinity

    function solve(node) {
        if (node === null) return 0;

        // 1. Get max profit from left and right (Ignore negatives with max(0, ...))
        let leftProfit = Math.max(0, solve(node.left));
        let rightProfit = Math.max(0, solve(node.right));

        // 2. Update global max (Treat current node as the 'turning point')
        let currentPathSum = node.data + leftProfit + rightProfit;
        maxSum = Math.max(maxSum, currentPathSum);

        // 3. Return the maximum straight path (one branch) to parent
        return node.data + Math.max(leftProfit, rightProfit);
    }

    solve(root);

    console.log("Maximum Path Sum is:", maxSum);
    return maxSum;
}

// BATTLE FIELD (Negative values included)
let root = new Node(-10);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

maxPathSum(root);
