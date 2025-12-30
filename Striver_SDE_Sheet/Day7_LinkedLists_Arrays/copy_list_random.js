/*
 * LeetCode 138: Copy List with Random Pointer
 * Strategy: Interweaving Nodes (O(1) Space)
 * Time Complexity: O(N)
 * Space Complexity: O(1) extra space
 */

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
}

/*
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) return null;

    // STEP 1: Insert clones in between original nodes
    // Original: 1 -> 2 -> 3
    // Result: 1 -> 1' -> 2 -> 2' -> 3 -> 3'
    let curr = head;
    while (curr) {
        let next = curr.next;
        let clone = new Node(curr.val, next, null);
        curr.next = clone;
        curr = next;
    }

    // STEP 2: Copy random pointers
    curr = head;
    while (curr) {
        if (curr.random) {
            curr.next.random = curr.random.next;
        }
        curr = curr.next.next;
    }

    // STEP 3: Separate the original and the clone list
    curr = head;
    let dummy = new Node(0, null, null);
    let copy = dummy;
    while (curr) {
        let nextOriginal = curr.next.next;
        let clone = curr.next;

        // Extract the clone
        copy.next = clone;
        copy = clone;

        // Restore original
        curr.next = nextOriginal;
        curr = nextOriginal;
    }

    return dummy.next;
};

console.log("Deep Copy Logic with Interweaving (O(1) space) ready for action.");
