class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Height & Diameter of Binary Tree
 * STRATEGY: Optimized O(N) single pass
 * TARGET: LeetCode 543 / Amazon / Razorpay 🔥
 */
function getTreeMetrics(root) {
    let maxD = 0;

    function solve(node) {
        if (node === null) return 0;

        let lh = solve(node.left);
        let rh = solve(node.right);

        // Update diameter (max distance found so far)
        maxD = Math.max(maxD, lh + rh);

        // Return height of current node
        return 1 + Math.max(lh, rh);
    }

    let h = solve(root);

    console.log("Maximum Height:", h);
    console.log("Maximum Diameter (Edges):", maxD);

    return { height: h, diameter: maxD };
}

// BATTLE FIELD (Sample Tree)
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

getTreeMetrics(root);
