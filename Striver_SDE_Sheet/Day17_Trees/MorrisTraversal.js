/**
 * Problem: Morris Inorder Traversal
 * 
 * Objective: Traverse the tree in Inorder (Left, Root, Right) 
 * with O(1) space (excluding the result array).
 * 
 * Logic (Titan Mode):
 * 1. Initialize 'curr' as the root.
 * 2. While 'curr' is not null:
 *    a. If 'curr' has no left child:
 *       - Visit 'curr' (add to results).
 *       - Move to 'curr.right'.
 *    b. Else (there is a left child):
 *       - Find the 'predecessor' (rightmost node in the left subtree).
 *       - If predecessor's right is null:
 *         - Create a temporary thread: predecessor.right = curr.
 *         - Move to 'curr.left'.
 *       - If predecessor's right is 'curr' (thread already exists):
 *         - Cut the thread: predecessor.right = null.
 *         - Visit 'curr' (add to results).
 *         - Move to 'curr.right'.
 */

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * Morris Inorder Traversal
 * @param {TreeNode} root 
 * @returns {number[]}
 */
function morrisInorder(root) {
    let result = [];
    let curr = root;

    while (curr !== null) {
        if (curr.left === null) {
            // No left subtree, visit and move right
            result.push(curr.val);
            curr = curr.right;
        } else {
            // Find the inorder predecessor
            let prev = curr.left;
            while (prev.right !== null && prev.right !== curr) {
                prev = prev.right;
            }

            if (prev.right === null) {
                // First time visiting this predecessor, create link
                prev.right = curr;
                curr = curr.left;
            } else {
                // Visited this predecessor before, break link and visit current
                prev.right = null;
                result.push(curr.val);
                curr = curr.right;
            }
        }
    }
    return result;
}

// --- Testing Section ---
// Creating a sample tree:
//        1
//       / \
//      2   3
//     / \
//    4   5

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log("Morris Inorder Traversal Result:", morrisInorder(root));
// Expected: [4, 2, 5, 1, 3]
