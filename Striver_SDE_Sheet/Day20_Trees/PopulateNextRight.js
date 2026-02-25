/**
 * Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * MISSION: Populate Next Right Pointers (Perfect Binary Tree)
 * STRATEGY: Bridge Connection Logic 🛡️
 * TARGET: LeetCode 116 🔥
 */
var connect = function (root) {
    if (!root || !root.left) return root;

    // 1. Apne baccho ko jodo (Left -> Right)
    root.left.next = root.right;

    // 2. Padosi ke baccho se "Bridge" banao
    if (root.next) {
        root.right.next = root.next.left;
    }

    // 3. Neeche jao
    connect(root.left);
    connect(root.right);

    return root;
};

// --- BATTLE TEST (Simplified) ---
function Node(val, left, right, next) {
    this.val = val;
    this.left = left;
    this.right = right;
    this.next = next;
}

// 1 -> (2,3) -> (4,5,6,7)
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);
let n7 = new Node(7);
let n2 = new Node(2, n4, n5);
let n3 = new Node(3, n6, n7);
let n1 = new Node(1, n2, n3, null);

connect(n1);

console.log("4.next should be 5:", n4.next.val);
console.log("5.next should be 6:", n5.next.val);
console.log("6.next should be 7:", n6.next.val);
console.log("7.next should be null:", n7.next);
