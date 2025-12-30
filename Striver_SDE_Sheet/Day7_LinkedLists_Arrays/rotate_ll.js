/**
 * LeetCode 61: Rotate List
 * Strategy: Circular Link + Cut at (L - k%L)
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next || k === 0) return head;

    // 1. Find Length and Tail
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // 2. Connect Tail to Head (Make it Circular)
    tail.next = head;

    // 3. Find the actual rotation needed
    k = k % length;
    let stepsToNewTail = length - k;

    // 4. Traverse to the node before the new head
    let newTail = tail;
    while (stepsToNewTail > 0) {
        newTail = newTail.next;
        stepsToNewTail--;
    }

    // 5. Break the ring
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};

// Helper for testing
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
    let res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    console.log(res.join(" -> "));
}

// Test Case: [1,2,3,4,5], k = 2
let list = createLL([1, 2, 3, 4, 5]);
console.log("Original List:");
printLL(list);

let rotated = rotateRight(list, 2);
console.log("Rotated List (k=2):");
printLL(rotated);
