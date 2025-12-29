/**
 * LeetCode 160: Intersection of Two Linked Lists
 * Strategy: Two Pointers (The "Bridge" Trick)
 * Time Complexity: O(N + M)
 * Space Complexity: O(1)
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;

    let a = headA;
    let b = headB;

    // The logic: When pointers switch lists, they equalize the travel distance
    while (a !== b) {
        // If 'a' reaches end, jump to headB; else move one step
        a = (a === null) ? headB : a.next;
        // If 'b' reaches end, jump to headA; else move one step
        b = (b === null) ? headA : b.next;
    }

    return a; // Will be the intersection node OR null
};

// Help for testing
function printLL(head) {
    let curr = head;
    let res = [];
    while (curr) {
        res.push(curr.val);
        curr = curr.next;
    }
    console.log(res.join(" -> "));
}

// Test Case Setup
let common = new ListNode(8);
common.next = new ListNode(10);

let h1 = new ListNode(4);
h1.next = new ListNode(1);
h1.next.next = common; // List 1: 4 -> 1 -> 8 -> 10

let h2 = new ListNode(5);
h2.next = new ListNode(6);
h2.next.next = new ListNode(1);
h2.next.next.next = common; // List 2: 5 -> 6 -> 1 -> 9-> 10

console.log("Intersection found at node with value:", getIntersectionNode(h1, h2).val);
