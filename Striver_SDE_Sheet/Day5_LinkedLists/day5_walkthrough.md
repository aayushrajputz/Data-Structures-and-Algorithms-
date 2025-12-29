# Day 5: Singly Linked List Mastery 🔗

Today we conquered the foundation of Linked Lists from the **Striver SDE Sheet**. We shifted from "Service-based thinking" to "Architect-level visualization."

## 🚀 Key Patterns Learned

### 1. The 3-Pointer Technique (Iterative Reversal)
*   **Problem:** Reverse a Linked List.
*   **Logic:** Use `prev`, `curr`, and `next`. 
*   **The Move:** Save Next -> Reverse Link -> Move Prev -> Move Curr.
*   **Complexity:** $O(N)$ Time, $O(1)$ Space.

### 2. The Tortoise & Hare (Slow & Fast Pointers)
*   **Problem:** Middle of Linked List / Cycle Detection.
*   **Logic:** `Slow` moves 1 step, `Fast` moves 2 steps.
*   **The Magic:** When Fast reaches the end, Slow is at the middle.
*   **Interview Tip:** Always check `fast !== null && fast.next !== null` to avoid crashes.

### 3. The Dummy Node Strategy (The Safety Net) 🛡️
*   **Problem:** Merge Sorted Lists / Remove Nth Node / Add Two Numbers.
*   **Logic:** Create a fake node `ListNode(-1)` and point it to the head.
*   **Why?** To handle edge cases like **deleting the head** or creating a new list without knowing the first node.

### 4. The Identity Theft Pattern (In-place Deletion) 🎭
*   **Problem:** Delete Node in $O(1)$ without access to head.
*   **Logic:** Copy the `next` node's value and skip the next node.
*   **Constraint:** Cannot delete the **Tail** node with this method.

## 🛠️ Problems Solved & Verified
1.  **Reverse Linked List** (LeetCode 206) ✅
2.  **Middle of Linked List** (LeetCode 876) ✅
3.  **Merge Two Sorted Lists** (LeetCode 21) ✅
4.  **Remove Nth Node from End** (LeetCode 19) ✅
5.  **Add Two Numbers** (LeetCode 2) ✅
6.  **Delete Node in O(1)** (LeetCode 237) ✅

---

## 💡 Interviewer Secret Questions (Don't Forget!)
*   **Q:** Why not use an Array for everything?
*   **A:** Linked Lists have $O(1)$ insertion/deletion at any known position, while arrays take $O(N)$.
*   **Q:** Why return `dummy.next`?
*   **A:** Because `dummy` itself is a placeholder; the real result starts from the node right after it.

---
**Status:** DAY 5 COMPLETE 🏁
**Next Target:** Day 6 - Linked List Part 2 (Cycles, Palindromes, Intersections).
