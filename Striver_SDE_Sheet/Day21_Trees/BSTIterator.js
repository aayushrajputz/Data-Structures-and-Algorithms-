/**
 * MISSION: BST Iterator (LeetCode 173)
 * STRATEGY: Controlled Inorder with Stack 🛡️
 * SPACE: O(H) | TIME: O(1) Amortized 🔥
 */
class BSTIterator {
    constructor(root) {
        this.stack = [];
        // Pehle poora "Left-most" rasta bhar do
        this._pushAll(root);
    }

    /** @return {number} */
    next() {
        // 1. Sabse chota element pop karo
        let node = this.stack.pop();

        // 2. Agar iska RIGHT child hai, toh uske saare LEFT nodes stack mein daalo
        if (node.right) {
            this._pushAll(node.right);
        }

        return node.val;
    }

    /** @return {boolean} */
    hasNext() {
        return this.stack.length > 0;
    }

    _pushAll(node) {
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
    }
}

// --- BATTLE TEST ---
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Tree: 10 -> (5, 15), 5 -> (2, 8)
let root = new TreeNode(10);
root.left = new TreeNode(5);
root.right = new TreeNode(15);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(8);

let iterator = new BSTIterator(root);
console.log(iterator.next());    // return 2
console.log(iterator.next());    // return 5
console.log(iterator.hasNext()); // return true
console.log(iterator.next());    // return 8
console.log(iterator.next());    // return 10
console.log(iterator.next());    // return 15
console.log(iterator.hasNext()); // return false
