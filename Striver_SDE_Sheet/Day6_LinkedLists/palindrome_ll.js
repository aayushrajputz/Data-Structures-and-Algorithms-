/**
 * LeetCode 234: Palindrome Linked List
 * Strategy: Find Middle -> Reverse Second Half -> Compare
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
}

var isPalindrome = function (head) {
    if (!head || !head.next) return true;

    // 1. Find the Middle Node (Slow and Fast)
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // 2. Reverse the Second Half
    // slow is at the middle. Reverse everything after slow.
    slow.next = reverseList(slow.next);

    // 3. Move slow to the head of the reversed half
    let p1 = head;
    let p2 = slow.next;

    // 4. Compare both halves
    while (p2) {
        if (p1.val !== p2.val) return false;
        p1 = p1.next;
        p2 = p2.next;
    }

    // (Optional) Best practice: Restore the list (reverse again) if needed
    // slow.next = reverseList(slow.next);

    return true;
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

// Test Case 1: Palindrome
let list1 = createLL([1, 2, 3, 2, 1]);
console.log("Is [1,2,3,2,1] Palindrome?", isPalindrome(list1));

// Test Case 2: Not a Palindrome
let list2 = createLL([1, 2, 3, 4, 5]);
console.log("Is [1,2,3,4,5] Palindrome?", isPalindrome(list2));
