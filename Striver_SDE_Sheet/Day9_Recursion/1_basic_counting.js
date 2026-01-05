/**
 * Level 1: Basic Counting
 * Goal: Understand the flow of execution and the Base Case.
 */

// 1. Print 1 to N
// Logic: Use the "Backtracking" property of recursion.
function print1ToN(n) {
    if (n === 0) return; // Base Case

    print1ToN(n - 1); // Recursive Call (Go deep first)
    console.log(n);   // Self Work (Executed while coming back from stack)
}

// 2. Print N to 1
// Logic: Print first, then call.
function printNTo1(n) {
    if (n === 0) return; // Base Case

    console.log(n);   // Self Work (Execute before going deep)
    printNTo1(n - 1); // Recursive Call
}

console.log("--- Printing 1 to 5 ---");
print1ToN(5);

console.log("\n--- Printing 5 to 1 ---");
printNTo1(5);

/**
 * Titan Note:
 * If you print BEFORE the call, it's called "Pre-order" or Top-Down.
 * If you print AFTER the call, it's called "Post-order" or Bottom-Up (Backtracking).
 */
