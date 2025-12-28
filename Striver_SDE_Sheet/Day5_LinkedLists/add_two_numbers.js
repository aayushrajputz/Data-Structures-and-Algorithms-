/**
 * LeetCode 2: Add Two Numbers
 * Approach: Iterative with Carry handling
 * Time Complexity: O(max(N, M))
 * Space Complexity: O(max(N, M)) for the result list
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0);
    let temp = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = 0;
        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        sum += carry;
        carry = Math.floor(sum / 10);
        temp.next = new ListNode(sum % 10);
        temp = temp.next;
    }

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

// Test Case: (2 -> 4 -> 3) + (5 -> 6 -> 4)
let l1 = createLL([2, 4, 3]);
let l2 = createLL([5, 6, 4]);

console.log("List 1:"); printLL(l1);
console.log("List 2:"); printLL(l2);

let result = addTwoNumbers(l1, l2);
console.log("Sum List:");
printLL(result);
