class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

/**
 * MISSION: Pre, In, Post in ONE Traversal
 * STRATEGY: One Stack + State Management (1, 2, 3)
 * TARGET: Efficiency Overload ⚡
 */
function allInOneTraversal(root) {
    if (!root) return;

    let stack = [{ node: root, state: 1 }];
    let pre = [], inorder = [], post = [];

    while (stack.length > 0) {
        let top = stack[stack.length - 1];

        // State 1: Preorder -> Left
        if (top.state === 1) {
            pre.push(top.node.data);
            top.state++;
            if (top.node.left) stack.push({ node: top.node.left, state: 1 });
        }
        // State 2: Inorder -> Right
        else if (top.state === 2) {
            inorder.push(top.node.data);
            top.state++;
            if (top.node.right) stack.push({ node: top.node.right, state: 1 });
        }
        // State 3: Postorder -> Pop
        else {
            post.push(top.node.data);
            stack.pop();
        }
    }

    console.log("Preorder: ", pre.join(" "));
    console.log("Inorder:  ", inorder.join(" "));
    console.log("Postorder:", post.join(" "));
}

// BATTLE FIELD
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

allInOneTraversal(root);
