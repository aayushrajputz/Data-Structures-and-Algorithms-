class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}

function preOrder(node) {
    if (node === null) return;
    process.stdout.write(node.data + " ");
    preOrder(node.left);
    preOrder(node.right);
}

function inOrder(node) {
    if (node === null) return;
    inOrder(node.left);
    process.stdout.write(node.data + " ");
    inOrder(node.right);
}

function postOrder(node) {
    if (node === null) return;
    postOrder(node.left);
    postOrder(node.right);
    process.stdout.write(node.data + " ");
}


/**
 * MISSION: Iterative Preorder Traversal
 * STRATEGY: Stack (LIFO)
 * TARGET: SDE-1 Razorpay / FAANG 🔥
 */

function iterativePreorder(root) {
    if (root === null) return;

    let stack = [];
    stack.push(root);

    console.log("\nIterative Preorder (NLR):");

    while (stack.length > 0) {
        let node = stack.pop(); // Sabse upar wala nikalo
        process.stdout.write(node.data + " ");

        // SMART MOVE: Pehle Right daalo taaki Left upar rahe
        if (node.right !== null) {
            stack.push(node.right);
        }
        if (node.left !== null) {
            stack.push(node.left);
        }
    }
    console.log();
}

/*
      1
     / \
    2   3
   / \
  4   5
*/
let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

// BATTLE TEST: Call this below your tree build
iterativePreorder(root);
iterativeInorder(root);
iterativePostorder(root);
levelOrder(root);
rightView(root);
topView(root);
bottomView(root);



console.log("Preorder (NLR):");

preOrder(root);
console.log("\nInorder (LNR):");
inOrder(root);
console.log("\nPostorder (LRN):");
postOrder(root);

function iterativeInorder(root) {
    let stack = [];
    let curr = root;
    let res = [];

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

    let s1 = [];
    let s2 = [];
    s1.push(root);

    while (s1.length > 0) {
        let node = s1.pop();
        s2.push(node);

        if (node.left !== null) s1.push(node.left);
        if (node.right !== null) s1.push(node.right);
    }

    console.log("Iterative Postorder (2 Stacks):");
    let res = [];
    while (s2.length > 0) {
        res.push(s2.pop().data);
    }
    console.log(res.join(" "));
}

/**
 * MISSION: Level Order Traversal (BFS)
 * STRATEGY: Queue (FIFO)
 * TARGET: SDE-1 Razorpay / FAANG 🔥
 */

function levelOrder(root) {
    if (root === null) return;

    let queue = [];
    queue.push(root);

    console.log("\nLevel Order Traversal:");

    while (queue.length > 0) {
        let node = queue.shift(); // FIFO: Pehle wala nikalo
        process.stdout.write(node.data + " ");

        if (node.left !== null) queue.push(node.left);
        if (node.right !== null) queue.push(node.right);
    }
    console.log();
}

/**
 * MISSION: Right View of Binary Tree
 * STRATEGY: BFS (Last node of each level)
 * TARGET: Titanic Precision 🎯
 */
function rightView(root) {
    if (!root) return;
    let queue = [root];
    let res = [];

    while (queue.length > 0) {
        let size = queue.length;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            if (i === size - 1) res.push(node.data);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    console.log("\nRight View (BFS):", res.join(" "));
}

/**
 * MISSION: Top View of Binary Tree
 * STRATEGY: Hashing + BFS (Vertical Indexing)
 * TARGET: SDE-1 Razorpay / Amazon 🔥
 */
function topView(root) {
    if (!root) return;

    let queue = [{ node: root, hd: 0 }]; // hd = Horizontal Distance
    let map = new Map();

    while (queue.length > 0) {
        let { node, hd } = queue.shift();

        if (!map.has(hd)) {
            map.set(hd, node.data);
        }

        if (node.left) queue.push({ node: node.left, hd: hd - 1 });
        if (node.right) queue.push({ node: node.right, hd: hd + 1 });
    }

    let sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);
    let res = sortedKeys.map(key => map.get(key));

    console.log("Top View (BFS):", res.join(" "));
}


function bottomView(root) {
    if (!root) return;
    let queue = [{ node: root, hd: 0 }];
    let map = new Map();
    while (queue.length > 0) {
        let { node, hd } = queue.shift();
        map.set(hd, node.data);
        if (node.left) queue.push({ node: node.left, hd: hd - 1 });
        if (node.right) queue.push({ node: node.right, hd: hd + 1 });
    }
    let sortedKeys = Array.from(map.keys()).sort((a, b) => a - b);
    let res = sortedKeys.map(key => map.get(key));
    console.log("Bottom View (BFS):", res.join(" "));
}