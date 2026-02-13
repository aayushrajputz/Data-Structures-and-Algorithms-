class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Check if two Binary Trees are Identical
 * STRATEGY: Recursive Structural Check
 * TARGET: LeetCode 100 🔥
 */
function isIdentical(p, q) {
    // Both empty
    if (!p && !q) return true;

    // One empty, one not
    if (!p || !q) return false;

    // Different values
    if (p.data !== q.data) return false;

    // Check all sub-branches
    return isIdentical(p.left, q.left) && isIdentical(p.right, q.right);
}

// BATTLE FIELD
let t1 = new Node(1);
t1.left = new Node(2);
t1.right = new Node(3);

let t2 = new Node(1);
t2.left = new Node(2);
t2.right = new Node(3);

console.log("Are Trees Identical?", isIdentical(t1, t2));
