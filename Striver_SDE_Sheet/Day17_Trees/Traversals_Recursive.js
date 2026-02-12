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

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("Preorder (NLR):"); preOrder(root);
console.log("\nInorder (LNR):"); inOrder(root);
console.log("\nPostorder (LRN):"); postOrder(root);
