/**
 * MISSION: Convert Binary Tree to Doubly Linked List (DLL)
 * STRATEGY: Inorder Traversal with 'prev' pointer 🛡️
 * TARGET: Striver's SDE Sheet [Miscellaneous] 🔥
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class Solution {
    bToDLL(root) {
        this.head = null;
        this.prev = null;
        this.solve(root);
        return this.head;
    }

    solve(root) {
        if (!root) return;

        // 1. Recursive Inorder: Go Left
        this.solve(root.left);

        // 2. Process Current Node
        if (this.prev === null) {
            // Ye sabse pehla node hai (Head of DLL)
            this.head = root;
        } else {
            // DLL Pointers connect karo
            root.left = this.prev;
            this.prev.right = root;
        }

        // Move prev to current node for the next step!
        this.prev = root;

        // 3. Recursive Inorder: Go Right
        this.solve(root.right);
    }
}

// --- BATTLE TEST ---
let sol = new Solution();
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(20);

let head = sol.convertToDLL(root);

// Result should be 5 <-> 10 <-> 20
console.log("DLL Inorder Traversal:");
let curr = head;
let output = [];
while (curr) {
    output.push(curr.val);
    curr = curr.right;
}
console.log(output.join(" <-> "));
