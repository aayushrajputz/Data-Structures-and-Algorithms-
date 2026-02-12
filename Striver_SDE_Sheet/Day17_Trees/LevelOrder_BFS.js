class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Level Order Traversal (BFS with Boundaries)
 * STRATEGY: Queue + Level Size Variable
 * TARGET: LeetCode/Interviews Specialized 🔥
 */
function levelOrder(root) {
    if (root === null) return [];

    let res = [];
    let queue = [root];

    while (queue.length > 0) {
        let size = queue.length; // TITAN LOGIC: Is level pe kitne nodes hain?
        let currentLevel = [];

        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            currentLevel.push(node.data);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        res.push(currentLevel); // Boundary complete!
    }

    console.log("Level Order Traversal (By Levels):", JSON.stringify(res));
    return res;
}


let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

levelOrder(root);
