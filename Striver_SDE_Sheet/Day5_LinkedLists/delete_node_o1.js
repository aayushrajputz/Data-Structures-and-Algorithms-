/**
 * LeetCode 237: Delete Node in a Linked List
 * Pattern: "Identity Theft" (Copy next node's data and skip it)
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 * 
 * NOTE: You are not given the head, only the node to be deleted.
 */

var deleteNode = function (node) {
    // 1. Copy the value of the next node into the current node
    // Current node becomes the "Identical Twin" of the next node
    node.val = node.next.val;

    // 2. Skip the next node (Delete the original twin)
    // Connect current node's next to the node after the next node
    node.next = node.next.next;
};

// --- TESTING CODE (NOT part of the problem) ---

function ListNode(val) {
    this.val = val;
    this.next = null;
}

function createLL(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let curr = head;
    for (let i = 1; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }
    return head;
}

function printLL(head) {
    let curr = head;
    let res = [];
    while (curr) {
        res.push(curr.val);
        curr = curr.next;
    }
    console.log(res.join(" -> "));
}

// Scenario: 4 -> 5 -> 1 -> 9
let head = createLL([4, 5, 1, 9]);
console.log("Before Deletion:");
printLL(head);

// Let's say we are given the node with value 5 directly
// (We find it here just for testing purposes)
let nodeToDelete = head.next; // This is node '5'

deleteNode(nodeToDelete);

console.log("After Deleting Node 5:");
printLL(head);
