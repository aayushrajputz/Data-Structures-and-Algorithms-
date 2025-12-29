/**
 * LeetCode 141: Linked List Cycle
 * Strategy: Tortoise and Hare (Slow & Fast Pointers)
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var hasCycle = function (head) {
    if (!head || !head.next) return false;

    let slow = head;
    let fast = head;

    // Fast moves 2 steps, Slow moves 1 step
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;

        // If they meet, there's a cycle
        if (slow === fast) {
            return true;
        }
    }

    // If fast reaches the end, no cycle
    return false;
};

// Helper for Testing
// Creating a cycle: 3 -> 2 -> 0 -> -4 -> (back to 2)
let n1 = new ListNode(3);
let n2 = new ListNode(2);
let n3 = new ListNode(0);
let n4 = new ListNode(-4);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n2; // Cycle created here

console.log("Has Cycle:", hasCycle(n1));
