/**
 * MISSION: SDE-1 @ Razorpay / Amazon
 * TASK: Merge K Sorted Linked Lists
 * LOGIC: Use a Min-Heap of size K to maintain the heads of all lists.
 */

const MinHeap = require('./min_heap.js');

// Definition for singly-linked list node.
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function mergeKLists(lists) {
    // Min-Heap based on the node's value
    const minHeap = new MinHeap((a, b) => a.val - b.val);

    // Step 1: Push the head of each list into the heap
    for (let l of lists) {
        if (l) minHeap.insert(l);
    }

    let dummy = new ListNode(0);
    let tail = dummy;

    // Step 2: Extract min and push its next node back to heap
    while (minHeap.heap.length > 0) {
        let minNode = minHeap.extractMin();
        tail.next = minNode;
        tail = tail.next;

        if (minNode.next) {
            minHeap.insert(minNode.next);
        }
    }

    return dummy.next;
}

// HELPER: To visualize output
function printList(head) {
    let curr = head;
    let res = [];
    while (curr) {
        res.push(curr.val);
        curr = curr.next;
    }
    console.log("Merged List:", res.join(" -> "));
}

// TEST CASES
const l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const l3 = new ListNode(2, new ListNode(6));

const merged = mergeKLists([l1, l2, l3]);
printList(merged); // Expected: 1 -> 1 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6
