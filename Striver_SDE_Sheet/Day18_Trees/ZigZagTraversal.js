class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Zig-Zag (Spiral) Traversal
 * STRATEGY: BFS + Level Toggle Flag
 * TARGET: LeetCode 103 🔥
 */
function zigZagTraversal(root) {
    if (!root) return [];

    let res = [];
    let queue = [root];
    let leftToRight = true;

    while (queue.length > 0) {
        let size = queue.length;
        let level = new Array(size);

        for (let i = 0; i < size; i++) {
            let node = queue.shift();

            // TITAN LOGIC: Determine position based on flag
            let index = leftToRight ? i : (size - 1 - i);
            level[index] = node.data;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        leftToRight = !leftToRight;
        res.push(level);
    }

    console.log("Zig-Zag Traversal:", JSON.stringify(res));
    return res;
}

// BATTLE FIELD
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

zigZagTraversal(root);
