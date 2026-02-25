/**
 * MISSION: Find Inorder Predecessor and Successor in a BST
 * STRATEGY: BST Search Space Reduction O(H) 🛡️
 * TARGET: Striver's SDE Sheet Day 20 🔥
 */

function findPreSuc(root, key) {
    let successor = null;
    let predecessor = null;

    let curr = root;

    // 1. Successor dhoondo
    let tempSuc = root;
    while (tempSuc) {
        if (tempSuc.val > key) {
            successor = tempSuc; // Possible successor
            tempSuc = tempSuc.left; // Aur choti value dhoondo jo key se badi ho
        } else {
            tempSuc = tempSuc.right;
        }
    }

    // 2. Predecessor dhoondo
    let tempPre = root;
    while (tempPre) {
        if (tempPre.val < key) {
            predecessor = tempPre; // Possible predecessor
            tempPre = tempPre.right; // Aur badi value dhoondo jo key se choti ho
        } else {
            tempPre = tempPre.left;
        }
    }

    return { predecessor, successor };
}

// --- BATTLE TEST ---
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// Tree: 50 -> (30, 70), 30 -> (null, 40)
let root = new TreeNode(50);
root.left = new TreeNode(30);
root.right = new TreeNode(70);
root.left.right = new TreeNode(40);

let key = 30;
let result = findPreSuc(root, key);

console.log(`Key: ${key}`);
console.log("Predecessor:", result.predecessor ? result.predecessor.val : "NULL");
console.log("Successor:", result.successor ? result.successor.val : "NULL");

key = 40;
result = findPreSuc(root, key);
console.log(`\nKey: ${key}`);
console.log("Predecessor:", result.predecessor ? result.predecessor.val : "NULL");
console.log("Successor:", result.successor ? result.successor.val : "NULL");
