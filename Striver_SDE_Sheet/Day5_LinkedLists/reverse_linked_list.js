/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * LeetCode 206: Reverse Linked List
 * Approach: Iterative (3 Pointers)
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

var reverseList = function (head) {
    let curr = head;
    let prev = null;

    while (curr !== null) {
        let next = curr.next;  // save next node
        curr.next = prev;      // reverse link
        prev = curr;           // move prev forward
        curr = next;           // move curr forward
    }

    return prev;
};

// Helper function to create a linked list from array
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

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
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

// Test Case
let head = createLL([1, 2, 3, 4, 5]);
console.log("Original List:");
printLL(head);
let reversed = reverseList(head);
console.log("Reversed List:");
printLL(reversed);
