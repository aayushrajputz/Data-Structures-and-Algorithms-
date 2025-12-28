/**
 * LeetCode 19: Remove Nth Node From End of List
 * Approach: One-pass with Fast and Slow pointers
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeNthFromEnd = function (head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy;
    let slow = dummy;

    // 1. Move fast pointer n steps ahead
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // 2. Move both until fast reaches the end
    while (fast.next !== null) {
        fast = fast.next;
        slow = slow.next;
    }

    // 3. Skip the Nth node
    slow.next = slow.next.next;

    return dummy.next;
};

// Helpers
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

// Test Case: Remove 2nd from end of [1,2,3,4,5]
let head = createLL([1, 2, 3, 4, 5]);
console.log("Original List:");
printLL(head);

let result = removeNthFromEnd(head, 2);
console.log("After Removing 2nd node from end:");
printLL(result);
