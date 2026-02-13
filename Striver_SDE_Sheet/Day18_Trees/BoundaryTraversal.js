class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Boundary Traversal of Binary Tree
 * STRATEGY: Modular (Left Boundary -> Leaves -> Right Boundary)
 * TARGET: SDE-2 Razorpay / Microsoft 🔥💀
 */

function isLeaf(node) {
    return !node.left && !node.right;
}

function addLeftBoundary(root, res) {
    let curr = root.left;
    while (curr) {
        if (!isLeaf(curr)) res.push(curr.data);
        if (curr.left) curr = curr.left;
        else curr = curr.right;
    }
}

function addLeaves(root, res) {
    if (isLeaf(root)) {
        res.push(root.data);
        return;
    }
    if (root.left) addLeaves(root.left, res);
    if (root.right) addLeaves(root.right, res);
}

function addRightBoundary(root, res) {
    let curr = root.right;
    let temp = [];
    while (curr) {
        if (!isLeaf(curr)) temp.push(curr.data);
        if (curr.right) curr = curr.right;
        else curr = curr.left;
    }
    // Reverse and add to main result
    for (let i = temp.length - 1; i >= 0; i--) {
        res.push(temp[i]);
    }
}

function boundaryTraversal(root) {
    if (!root) return [];

    let res = [];

    // Step 1: Root (Agar root leaf hai toh add karke return ho jao)
    if (!isLeaf(root)) res.push(root.data);

    // Step 2: Left Boundary (Excluding leaves)
    addLeftBoundary(root, res);

    // Step 3: All Leaves (Left to Right)
    addLeaves(root, res);

    // Step 4: Right Boundary (Excluding leaves, Bottom to Top)
    addRightBoundary(root, res);

    console.log("Boundary Traversal:", res.join(" "));
    return res;
}

// BATTLE FIELD
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.left.right.left = new Node(8);
root.left.right.right = new Node(9);
root.right.left = new Node(6);
root.right.right = new Node(7);

boundaryTraversal(root);
