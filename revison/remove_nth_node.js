/**
 * Problem: Remove Nth Node From End of List (LeetCode 19)
 * Difficulty: Medium
 * Pattern: Two Pointers (Fast & Slow)
 */

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function removeNthFromEnd(head, n) {
    // Write your code here
    return head;
}

// Helper to print linked list
function printList(head) {
    let curr = head;
    let result = [];
    while (curr) {
        result.push(curr.val);
        curr = curr.next;
    }
    console.log(result.join(" -> "));
}

// Test Case: 1 -> 2 -> 3 -> 4 -> 5, n = 2
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log("Original List:");
printList(head);

let updatedHead = removeNthFromEnd(head, 2);
console.log("Updated List (Removed 2nd from end):");
printList(updatedHead);
