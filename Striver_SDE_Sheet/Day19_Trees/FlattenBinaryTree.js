class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Flatten Binary Tree to Linked List
 * STRATEGY: Morris-style O(1) Space Connection
 * TARGET: LeetCode 114 / Amazon / Adobe 🔥💀
 */
function flatten(root) {
    let curr = root;

    while (curr !== null) {
        if (curr.left !== null) {
            // Find the rightmost node of the left subtree
            let prev = curr.left;
            while (prev.right !== null) {
                prev = prev.right;
            }

            // Link this rightmost node to the current's right subtree
            prev.right = curr.right;

            // Move the left subtree to the right
            curr.right = curr.left;
            curr.left = null; // Essential cleanup
        }
        // Move to the next node on the right
        curr = curr.right;
    }

    // Print flattened tree (it should look like a linked list now)
    let temp = root;
    let res = [];
    while (temp) {
        res.push(temp.val);
        temp = temp.right;
    }
    console.log("Flattened Tree (Linked List):", res.join(" -> "));
}

// BATTLE FIELD
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.right = new Node(6);

flatten(root);
