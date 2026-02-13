class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Check if Binary Tree is Symmetric (Mirror)
 * STRATEGY: Recursive Cross-Comparison 🪞
 * TARGET: LeetCode 101 / Microsoft 🔥
 */
function isSymmetric(root) {
    if (!root) return true;

    function check(n1, n2) {
        if (!n1 && !n2) return true;
        if (!n1 || !n2) return false;

        return (n1.data === n2.data) &&
            check(n1.left, n2.right) &&
            check(n1.right, n2.left);
    }

    let res = check(root.left, root.right);
    console.log("Is Tree Symmetric?", res);
    return res;
}

// BATTLE FIELD (Symmetric Tree)
//       1
//      / \
//     2   2
//    / \ / \
//   3  4 4  3
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(4);
root.right.right = new Node(3);

isSymmetric(root);
