/**
 * LeetCode 142: Linked List Cycle II
 * Strategy: Floyd's Detection + Reset Pointer
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var detectCycle = function (head) {
    if (!head || !head.next) return null;

    let slow = head;
    let fast = head;
    let entry = head;

    // Phase 1: Find the Collision Point
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // Phase 2: Reset one pointer to Head and move both 1-step at a time
            while (entry !== slow) {
                entry = entry.next;
                slow = slow.next;
            }
            return entry; // This is the Start of the Cycle
        }
    }

    return null; // No cycle found
};

// Helper for Testing
let n1 = new ListNode(3);
let n2 = new ListNode(2);
let n3 = new ListNode(0);
let n4 = new ListNode(-4);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n2; // Cycle starts at node with value 2

let result = detectCycle(n1);
console.log("Cycle starts at node with value:", result ? result.val : "No Cycle");
