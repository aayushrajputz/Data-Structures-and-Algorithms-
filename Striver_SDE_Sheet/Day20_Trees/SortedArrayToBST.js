function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

/**
 * MISSION: Convert Sorted Array to Balanced BST
 * STRATEGY: Level-wise Middle Partitioning (O(N)) 🛡️
 * TARGET: LeetCode 108 🔥
 */
var sortedArrayToBST = function (nums) {
    if (!nums || nums.length === 0) return null;

    function build(low, high) {
        // Base Condition
        if (low > high) return null;

        // Pick Middle as Root to maintain height balance
        let mid = Math.floor((low + high) / 2);
        let node = new TreeNode(nums[mid]);

        // Recursively build subtrees
        node.left = build(low, mid - 1);
        node.right = build(mid + 1, high);

        return node;
    }

    return build(0, nums.length - 1);
};

// --- TEST DRIVE ---
function inorder(root, res = []) {
    if (!root) return;
    inorder(root.left, res);
    res.push(root.val);
    inorder(root.right, res);
    return res;
}

let nums = [-10, -3, 0, 5, 9];
let root = sortedArrayToBST(nums);
console.log("Inorder of Built Tree (Should be same as Input):", inorder(root));
console.log("Root of Tree (Expected 0):", root.val);
