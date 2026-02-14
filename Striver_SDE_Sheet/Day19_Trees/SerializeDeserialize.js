class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Serialize and Deserialize Binary Tree
 * STRATEGY: BFS (Level Order) with Queue 🛡️
 * TARGET: LeetCode 297 (HARD) 🔥🌋
 */

// 1. Serialize: Tree -> String
function serialize(root) {
    if (!root) return "";
    let res = [];
    let queue = [root];

    while (queue.length > 0) {
        let node = queue.shift();
        if (node) {
            res.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            res.push("#");
        }
    }
    return res.join(",");
}

// 2. Deserialize: String -> Tree
function deserialize(data) {
    if (data === "") return null;
    let nodes = data.split(",");
    let root = new Node(parseInt(nodes[0]));
    let queue = [root];
    let i = 1;

    while (queue.length > 0 && i < nodes.length) {
        let curr = queue.shift();

        // Left Child
        if (nodes[i] !== "#") {
            let leftNode = new Node(parseInt(nodes[i]));
            curr.left = leftNode;
            queue.push(leftNode);
        }
        i++;

        // Right Child
        if (i < nodes.length && nodes[i] !== "#") {
            let rightNode = new Node(parseInt(nodes[i]));
            curr.right = rightNode;
            queue.push(rightNode);
        }
        i++;
    }
    return root;
}

// BATTLE FIELD
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.right.left = new Node(4);
root.right.right = new Node(5);

console.log("Original Tree Root:", root.val);
let serializedStr = serialize(root);
console.log("Serialized String:", serializedStr);

let deserializedRoot = deserialize(serializedStr);
console.log("Deserialized Tree Root:", deserializedRoot.val);
console.log("Check Structure (3.left):", deserializedRoot.right.left.val);
