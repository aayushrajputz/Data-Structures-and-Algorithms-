/**
 * LeetCode 876: Middle of the Linked List
 * Approach: Tortoise and Hare (Slow & Fast Pointers)
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

var middleNode = function (head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;       // 1 step
        fast = fast.next.next;  // 2 steps
    }

    return slow;
};

// Helper function to create a linked list from array
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
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

// Test Case 1: Odd Length
let head1 = createLL([1, 2, 3, 4, 5]);
console.log("Original List 1:");
printLL(head1);
let mid1 = middleNode(head1);
console.log("Middle Node 1: " + mid1.val);

// Test Case 2: Even Length
let head2 = createLL([1, 2, 3, 4, 5, 6]);
console.log("\nOriginal List 2:");
printLL(head2);
let mid2 = middleNode(head2);
console.log("Middle Node 2: " + mid2.val); // Should be 4
