/**
 * MISSION: Two Sum in BST (LeetCode 653)
 * STRATEGY: Two BST Iterators (i and j) 🛡️
 * SPACE: O(H) | TIME: O(N) 🔥
 */

class BSTIterator {
    constructor(root, isReverse) {
        this.stack = [];
        this.reverse = isReverse; // false for forward, true for backward
        this._pushNodes(root);
    }

    hasNext() {
        return this.stack.length > 0;
    }

    next() {
        let node = this.stack.pop();
        if (!this.reverse) {
            this._pushNodes(node.right);
        } else {
            this._pushNodes(node.left);
        }
        return node.val;
    }

    _pushNodes(node) {
        while (node) {
            this.stack.push(node);
            if (!this.reverse) {
                node = node.left;
            } else {
                node = node.right;
            }
        }
    }
}

var findTarget = function (root, k) {
    if (!root) return false;

    // 1. Do iterators banao (Forward and Backward)
    let left = new BSTIterator(root, false);
    let right = new BSTIterator(root, true);

    // 2. Pehle do values uthao
    let i = left.next();
    let j = right.next();

    // 3. Two Pointer Logic
    while (i < j) {
        if (i + j === k) return true;

        if (i + j < k) {
            i = left.next();
        } else {
            j = right.next();
        }
    }

    return false;
};

// --- BATTLE TEST ---
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Tree: 5 -> (3, 6), 3 -> (2, 4), 6 -> (null, 7)
let root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.right.right = new TreeNode(7);

console.log("Target 9 (Should be true):", findTarget(root, 9)); // 2+7, 3+6, 4+5 (Wait, 5 is root, 4 is leaf)
console.log("Target 28 (Should be false):", findTarget(root, 28));
