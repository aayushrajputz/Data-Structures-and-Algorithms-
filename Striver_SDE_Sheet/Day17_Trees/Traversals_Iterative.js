class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

function iterativePreorder(root) {
    if (root === null) return;
    let stack = [root], res = [];
    while (stack.length > 0) {
        let node = stack.pop();
        res.push(node.data);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    console.log("Iterative Preorder:", res.join(" "));
}

function iterativeInorder(root) {
    let stack = [], curr = root, res = [];
    while (curr !== null || stack.length > 0) {
        while (curr !== null) {
            stack.push(curr);
            curr = curr.left;
        }
        curr = stack.pop();
        res.push(curr.data);
        curr = curr.right;
    }
    console.log("Iterative Inorder:", res.join(" "));
}

function iterativePostorder(root) {
    if (root === null) return;
    let s1 = [root], s2 = [], res = [];
    while (s1.length > 0) {
        let node = s1.pop();
        s2.push(node);
        if (node.left) s1.push(node.left);
        if (node.right) s1.push(node.right);
    }
    while (s2.length > 0) res.push(s2.pop().data);
    console.log("Iterative Postorder (2 Stacks):", res.join(" "));
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

iterativePreorder(root);
iterativeInorder(root);
iterativePostorder(root);
