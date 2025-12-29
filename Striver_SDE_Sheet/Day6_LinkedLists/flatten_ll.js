/**
 * GeeksforGeeks: Flattening a Linked List
 * Strategy: Recursion + Iterative Merge
 * Time Complexity: O(N*M) where N is nodes in next and M is nodes in bottom
 * Space Complexity: O(1) or O(N) for recursion stack
 */

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.bottom = null;
    }
}

class Solution {
    // Tool: Merge Two Sorted Vertical Lists (Iterative is faster for GFG)
    merge(a, b) {
        if (!a) return b;
        if (!b) return a;

        let dummy = new Node(-1);
        let temp = dummy;

        while (a && b) {
            if (a.data < b.data) {
                temp.bottom = a;
                a = a.bottom;
            } else {
                temp.bottom = b;
                b = b.bottom;
            }
            temp = temp.bottom;
            temp.next = null; // Horizontal pointer saaf karo
        }

        if (a) temp.bottom = a;
        else temp.bottom = b;

        return dummy.bottom;
    }

    // Mission: Flatten Function
    flatten(root) {
        if (!root || !root.next) return root;

        // 1. Piche ki list ko flatten karwa kar lao
        root.next = this.flatten(root.next);

        // 2. Apne current tower ko us piche wali list se merge kardo
        root = this.merge(root, root.next);

        // 3. Output vertical mangte hain toh result return kardo
        return root;
    }
}

