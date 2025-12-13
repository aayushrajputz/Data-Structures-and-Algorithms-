# Day 1: Big O Notation & Complexity Analysis

## Why is this important?
- It distinguishes a "coder" from an "engineer".
- It is the standard language for discussing performance in interviews.
- **Goal:** For every problem we solve, we MUST state the Time and Space complexity.

## Time Complexity (Speed)
How does the runtime grow as the input size ($N$) increases?

| Notation | Name | Example |
| :--- | :--- | :--- |
| $O(1)$ | Constant Time | Accessing an array index `arr[5]` |
| $O(\log N)$ | Logarithmic Time | Binary Search |
| $O(N)$ | Linear Time | Simple loop through an array |
| $O(N \log N)$ | Linearithmic | Sorting (Merge Sort, Quick Sort) |
| $O(N^2)$ | Quadratic | Nested loops (Bubble Sort) |
| $O(2^N)$ | Exponential | Recursive Fibonacci |

## Space Complexity (Memory)
How much extra RAM does the algorithm need as $N$ grows?

- **Auxiliary Space:** Extra space used (temp arrays, variables).
- **Stack Space:** Recursion stack depth.

---

## Practice Questions
(We will solve these today)

1. Calculate complexity of a simple loop.
2. Calculate complexity of nested loops.
3. specific tricky cases (loops dependent on previous variables).
