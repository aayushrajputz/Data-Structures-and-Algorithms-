/**
 * MISSION: Find Floor and Ceil in a BST
 * STRATEGY: BST Search Space Reduction 🛡️
 * TARGET: Striver's SDE Sheet Day 21 🔥
 */

function findFloorCeil(root, key) {
    let floor = -1;
    let ceil = -1;

    // 1. Find Ceil (Smallest value >= key)
    let curr = root;
    while (curr) {
        if (curr.val === key) {
            ceil = curr.val;
            break;
        }
        if (curr.val > key) {
            ceil = curr.val; // Potential ceil
            curr = curr.left; // Chhoti value dhoondo
        } else {
            curr = curr.right;
        }
    }

    // 2. Find Floor (Largest value <= key)
    curr = root;
    while (curr) {
        if (curr.val === key) {
            floor = curr.val;
            break;
        }
        if (curr.val < key) {
            floor = curr.val; // Potential floor
            curr = curr.right; // Badi value dhoondo
        } else {
            curr = curr.left;
        }
    }

    return { floor, ceil };
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

let key = 7;
let result = findFloorCeil(root, key);

console.log(`Key: ${key}`);
console.log("Floor:", result.floor); // Should be 5
console.log("Ceil:", result.ceil);   // Should be 8

key = 12;
result = findFloorCeil(root, key);
console.log(`\nKey: ${key}`);
console.log("Floor:", result.floor); // Should be 10
console.log("Ceil:", result.ceil);   // Should be 15
