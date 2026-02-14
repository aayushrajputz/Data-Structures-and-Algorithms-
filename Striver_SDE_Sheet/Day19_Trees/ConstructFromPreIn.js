class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Construct Binary Tree from Preorder and Inorder Traversal
 * STRATEGY: Map for O(1) Lookup + Recursive Range Slicing
 * TARGET: LeetCode 105 / FAANG 🔥
 */
function buildTree(preorder, inorder) {
    // 1. Map for fast index lookup in Inorder array
    const inorderMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    let preIndex = 0;

    function solve(inStart, inEnd) {
        // Base case: Range invalid
        if (inStart > inEnd) return null;

        // Pick root from preorder
        let rootValue = preorder[preIndex++];
        let root = new Node(rootValue);

        // Find position of this root in Inorder array
        let rootIndex = inorderMap.get(rootValue);

        // Build subtrees
        // CRITICAL: Pehle LEFT banega kyunki Preorder mein Left pehle aata hai!
        root.left = solve(inStart, rootIndex - 1);
        root.right = solve(rootIndex + 1, inEnd);

        return root;
    }

    return solve(0, inorder.length - 1);
}

// BATTLE FIELD
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

const root = buildTree(preorder, inorder);

function printLevelOrder(root) {
    if (!root) return;
    let queue = [root];
    let res = [];
    while (queue.length > 0) {
        let node = queue.shift();
        res.push(node ? node.val : "null");
        if (node) {
            queue.push(node.left);
            queue.push(node.right);
        }
    }
    console.log("Constructed Tree (Level Order):", res.filter((v, i, a) => v !== "null" || a.slice(i).some(x => x !== "null")).join(" "));
}

printLevelOrder(root);
