/**
 * LeetCode 21: Merge Two Sorted Lists
 * Approach: Iterative using Dummy Node
 * Time Complexity: O(N + M)
 * Space Complexity: O(1)
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeTwoLists = function (l1, l2) {
    let dummy = new ListNode(-1);
    let temp = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.val <= l2.val) {
            temp.next = l1;
            l1 = l1.next;
        } else {
            temp.next = l2;
            l2 = l2.next;
        }
        temp = temp.next;
    }

    // Connect the remaining nodes
    if (l1 !== null) temp.next = l1;
    else temp.next = l2;

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

// Test Case
let l1 = createLL([1, 2, 4]);
let l2 = createLL([1, 3, 4]);
console.log("List 1:"); printLL(l1);
console.log("List 2:"); printLL(l2);

let merged = mergeTwoLists(l1, l2);
console.log("Merged List:");
printLL(merged);
