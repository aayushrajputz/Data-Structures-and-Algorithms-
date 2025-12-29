/**
 * LeetCode 25: Reverse Nodes in k-Group (HARD)
 * Strategy: Iterative with Dummy Node & Pointers
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var reverseKGroup = function (head, k) {
    if (!head || k === 1) return head;

    let dummy = new ListNode(0);
    dummy.next = head;

    let pre = dummy; // Pointing to node just before the group
    let end = dummy; // Pointing to the last node of the group

    while (end.next !== null) {
        // 1. Move 'end' k steps ahead to find the group boundary
        for (let i = 0; i < k && end !== null; i++) {
            end = end.next;
        }
        if (end === null) break; // Not enough nodes left to reverse

        // 2. Save connections
        let start = pre.next;
        let nextGroupHead = end.next;

        // 3. Temporarily cut the group from the rest of the train
        end.next = null;

        // 4. Reverse the current group (using the 3-pointer pattern)
        pre.next = reverse(start);

        // 5. Connect the reversed group's tail to the next group
        start.next = nextGroupHead;

        // 6. Move pointers for the next group
        pre = start;
        end = pre;
    }

    return dummy.next;
};

// Standard 3-pointer reversal helper
function reverse(head) {
    let prev = null;
    let curr = head;
    while (curr !== null) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

// Helpers for testing
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

// Test Case: 1->2->3->4->5, k=2
let head = createLL([1, 2, 3, 4, 5]);
console.log("Original:"); printLL(head);

let result = reverseKGroup(head, 2);
console.log("Reversed in k=2:");
printLL(result);
