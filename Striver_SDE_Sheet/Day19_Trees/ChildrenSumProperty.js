class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Children Sum Property (Change Tree)
 * STRATEGY: Two-pass (Update children down, Update parent up)
 * LIMITATION: Only Increase node values
 * TARGET: GFG / Interview Classic 🔥🛡️
 */
function changeTree(root) {
    if (!root) return;

    let childSum = 0;
    if (root.left) childSum += root.left.val;
    if (root.right) childSum += root.right.val;

    // STEP 1: Going Down (Top-to-Bottom)
    if (childSum >= root.val) {
        root.val = childSum;
    } else {
        // Child sum is smaller, increase children to match root
        if (root.left) root.left.val = root.val;
        if (root.right) root.right.val = root.val;
    }

    // Recursion
    changeTree(root.left);
    changeTree(root.right);

    // STEP 2: Coming Up (Bottom-to-Top)
    let total = 0;
    if (root.left) total += root.left.val;
    if (root.right) total += root.right.val;

    // Final check for non-leaf nodes
    if (root.left || root.right) {
        root.val = total;
    }
}

function printInorder(root) {
    if (!root) return;
    printInorder(root.left);
    process.stdout.write(root.val + " ");
    printInorder(root.right);
}

// BATTLE FIELD
let root = new Node(40);
root.left = new Node(10);
root.right = new Node(20);
root.left.left = new Node(2);
root.left.right = new Node(5);
root.right.left = new Node(30);
root.right.right = new Node(40);

console.log("Original Inorder:");
printInorder(root);
changeTree(root);
console.log("\nChildren Sum Updated Inorder:");
printInorder(root);
console.log("");
