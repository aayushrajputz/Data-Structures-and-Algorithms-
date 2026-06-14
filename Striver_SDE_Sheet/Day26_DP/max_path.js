var maxPathSum = function (root) {
    let maxSum = -Infinity; // Values can be negative, so start with -Infinity

    function solve(node) {
        if (!node) return 0;

        // 1. Get max profit from children (If negative, treat as 0 -> Don't take that path)
        let leftProfit = Math.max(0, solve(node.left));
        let rightProfit = Math.max(0, solve(node.right));

        // 2. Update global max (Treat current node as the 'peak/turn' of the path)
        let currentPathSum = node.val + leftProfit + rightProfit;
        maxSum = Math.max(maxSum, currentPathSum);

        // 3. Return the maximum straight branch profit to parent
        return node.val + Math.max(leftProfit, rightProfit);
    }

    solve(root);
    return maxSum;
};