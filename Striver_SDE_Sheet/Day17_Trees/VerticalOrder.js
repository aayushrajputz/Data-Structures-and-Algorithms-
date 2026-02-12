class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Vertical Order Traversal
 * STRATEGY: BFS + Horizontal Distance (hd) + Map
 * TARGET: SDE-2/3 Specialized Logic 🚀
 */
function verticalOrder(root) {
    if (!root) return [];

    let map = new Map(); // hd -> [list of nodes]
    let queue = [{ node: root, hd: 0 }];

    while (queue.length > 0) {
        let { node, hd } = queue.shift();

        if (!map.has(hd)) {
            map.set(hd, []);
        }
        map.get(hd).push(node.data);

        if (node.left) queue.push({ node: node.left, hd: hd - 1 });
        if (node.right) queue.push({ node: node.right, hd: hd + 1 });
    }

    let sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);
    let result = sortedKeys.map(key => map.get(key));

    console.log("Vertical Order Traversal:", JSON.stringify(result));
    return result;
}

// BATTLE FIELD
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(10);
root.right.left = new Node(9);
root.right.right = new Node(7);

verticalOrder(root);
