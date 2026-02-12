class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function rightView(root) {
    if (!root) return;
    let queue = [root], res = [];
    while (queue.length > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (i === size - 1) res.push(node.data);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    console.log("Right View:", res.join(" "));
}

function topView(root) {
    if (!root) return;
    let queue = [{ node: root, hd: 0 }], map = new Map();
    while (queue.length > 0) {
        let { node, hd } = queue.shift();
        if (!map.has(hd)) map.set(hd, node.data);
        if (node.left) queue.push({ node: node.left, hd: hd - 1 });
        if (node.right) queue.push({ node: node.right, hd: hd + 1 });
    }
    let res = Array.from(map.keys()).sort((a, b) => a - b).map(key => map.get(key));
    console.log("Top View:", res.join(" "));
}

function bottomView(root) {
    if (!root) return;
    let queue = [{ node: root, hd: 0 }], map = new Map();
    while (queue.length > 0) {
        let { node, hd } = queue.shift();
        map.set(hd, node.data);
        if (node.left) queue.push({ node: node.left, hd: hd - 1 });
        if (node.right) queue.push({ node: node.right, hd: hd + 1 });
    }
    let res = Array.from(map.keys()).sort((a, b) => a - b).map(key => map.get(key));
    console.log("Bottom View:", res.join(" "));
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

rightView(root);
topView(root);
bottomView(root);
