class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Root to Node Path
 * STRATEGY: Recursion + Backtracking
 * TARGET: SDE-1 Razorpay / Amazon 🔥
 */
function getPath(node, target, arr) {
    if (!node) return false;

    arr.push(node.data);

    if (node.data === target) return true;

    if (getPath(node.left, target, arr) || getPath(node.right, target, arr)) {
        return true;
    }

    arr.pop();
    return false;
}

// BATTLE FIELD
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

let result = [];
let targetNodeValue = 5;
if (getPath(root, targetNodeValue, result)) {
    console.log(`Path to ${targetNodeValue}:`, result.join(" -> "));
} else {
    console.log("Path not found");
}
