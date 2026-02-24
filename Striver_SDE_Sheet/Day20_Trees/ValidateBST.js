class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Validate Binary Search Tree
 * STRATEGY: Laxman Rekha (Range Validation)
 * TARGET: LeetCode 98 🔥🛡️
 */
function isValidBST(root) {
    function validate(node, min, max) {
        // 1. Base Case: Khali node hamesha valid hai
        if (node === null) return true;

        // 2. Range Violation Check: 🚩
        // Rule: node.val MUST be strictly greater than min AND strictly less than max
        if (node.val <= min || node.val >= max) {
            return false;
        }

        // 3. Recursive Checks:
        // When moving Left, current node's value becomes the new UPPER limit (max).
        // When moving Right, current node's value becomes the new LOWER limit (min).
        return validate(node.left, min, node.val) &&
            validate(node.right, node.val, max);
    }

    // Battle Start: Initial Range is infinite
    return validate(root, -Infinity, Infinity);
}


// BATTLE FIELD
let root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.right.left = new Node(11); // Valid
root.right.right = new Node(20); // Valid

console.log("Is True BST?", isValidBST(root));

// FAKE BST CASE
let fakeRoot = new Node(10);
fakeRoot.left = new Node(5);
fakeRoot.right = new Node(15);
fakeRoot.right.left = new Node(8); // INVALID! (8 is < 10 but in right subtree)

console.log("Is Fake BST valid?", isValidBST(fakeRoot));
