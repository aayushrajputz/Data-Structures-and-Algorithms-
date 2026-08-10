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
    let dummy = new ListNode(0)
    dummy.next = head
    let fast = dummy
    let slow = dummy
    for (let i = 0; i < n; i++) {
        fast = fast.next
    }
    while (fast.next != null) {
        fast = fast.next
        slow = slow.next
    }
    slow.next = slow.next.next;
    return dummy.next;
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
