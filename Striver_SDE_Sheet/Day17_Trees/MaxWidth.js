class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Maximum Width of Binary Tree
 * STRATEGY: BFS + Level-wise Indexing Reset + BigInt
 * TARGET: SDE-1 Razorpay / Amazon 🔥
 */
function maxWidth(root) {
    if (!root) return 0;

    let queue = [{ node: root, id: 0n }]; // Using BigInt for preventing overflow
    let maxW = 0n;

    while (queue.length > 0) {
        let size = queue.length;
        let minId = queue[0].id; // First node of current level
        let first, last;

        for (let i = 0; i < size; i++) {
            let { node, id } = queue.shift();
            let curId = id - minId; // Normalize to prevent overflow

            if (i === 0) first = curId;
            if (i === size - 1) last = curId;

            if (node.left) queue.push({ node: node.left, id: curId * 2n + 1n });
            if (node.right) queue.push({ node: node.right, id: curId * 2n + 2n });
        }

        let width = last - first + 1n;
        if (width > maxW) maxW = width;
    }

    console.log("Maximum Width of Tree:", Number(maxW));
    return Number(maxW);
}

// BATTLE FIELD
let root = new Node(1);
root.left = new Node(3);
root.right = new Node(2);
root.left.left = new Node(5);
root.left.right = new Node(3);
root.right.right = new Node(9);

maxWidth(root);
