/**
 * Level 3: Fibonacci (Multiple Recursive Calls)
 * LeetCode #509: Fibonacci Number
 * Goal: Understand the Recursive Tree (Branching).
 */

var fib = function (n) {
    // Base Cases
    if (n <= 1) return n;

    // Multiple Recursive Calls
    // This branches into a TREE.
    return fib(n - 1) + fib(n - 2);
};

console.log("Fibonacci of 4:", fib(4));
// Tree Visualization for fib(4):
//              fib(4)
//             /      \
//         fib(3)    fib(2)
//        /    \     /    \
//     fib(2) fib(1)fib(1)fib(0)
//    /    \
// fib(1) fib(0)

/**
 * Titan Note:
 * This is inefficient (O(2^N)) because we re-calculate the same things.
 * But it's perfect to learn how a single function creates two new paths!
 */
