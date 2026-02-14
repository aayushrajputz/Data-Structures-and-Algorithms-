class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Construct Binary Tree from Inorder and Postorder Traversal
 * STRATEGY: Reverse PostOrder (Root -> Right -> Left)
 * TARGET: LeetCode 106 / FAANG 🔥
 */
function buildTree(inorder, postorder) {
    const n = inorder.length;
    const inorderMap = new Map();
    for (let i = 0; i < n; i++) {
        inorderMap.set(inorder[i], i);
    }

    let postIndex = n - 1;

    function solve(inStart, inEnd) {
        if (inStart > inEnd) return null;

        // Root is at the end of postorder
        let rootValue = postorder[postIndex--];
        let root = new Node(rootValue);

        // Position in Inorder
        let rootIndex = inorderMap.get(rootValue);

        // CRITICAL: Pehle RIGHT call hogi! 🚩
        root.right = solve(rootIndex + 1, inEnd);
        root.left = solve(inStart, rootIndex - 1);

        return root;
    }

    return solve(0, n - 1);
}

// BATTLE FIELD
const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];

const root = buildTree(inorder, postorder);

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
    // Simple filter to clean up nulls for display
    console.log("Constructed Tree (Level Order):", res.filter((v, i, a) => v !== "null" || a.slice(i).some(x => x !== "null")).join(" "));
}

printLevelOrder(root);
