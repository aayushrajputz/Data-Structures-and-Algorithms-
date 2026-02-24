class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Search in a BST
 * STRATEGY: Structural Reduction (O(log N) average)
 * TARGET: LeetCode 700 🔥🛡️
 */
function searchBST(root, val) {
    // 1. Initial Pointer
    let curr = root;

    // 2. Loop until found or reached a dead end
    while (curr !== null) {
        // MATCH FOUND! 🎯
        if (curr.val === val) return curr;

        // DECISION TIME: 🧭
        if (val < curr.val) {
            // Target chota hai, Left galli mein jao
            curr = curr.left;
        } else {
            // Target bada hai, Right highway pakdo
            curr = curr.right;
        }
    }

    return null; // Dhunda bahut par mila nahi 🚩
}

// BATTLE FIELD
let root = new Node(4);
root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(1);
root.left.right = new Node(3);

let result = searchBST(root, 2);
console.log("Search Result (Target 2):", result ? result.val : "Not Found");

let result2 = searchBST(root, 5);
console.log("Search Result (Target 5):", result2 ? result2.val : "Not Found");
