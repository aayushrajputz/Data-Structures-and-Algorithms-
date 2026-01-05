/**
 * Level 2: Sum and Factorial
 * Goal: Understand how to return values or carry state.
 */

// 1. Sum of first N numbers
// Logic: f(n) = n + f(n-1)
function sumOfN(n) {
    if (n === 0) return 0; // Base Case
    return n + sumOfN(n - 1); // Recursive Step
}

// 2. Factorial of N (Classic Example)
// Logic: n! = n * (n-1)!
function factorial(n) {
    if (n === 1 || n === 0) return 1; // Base Case
    return n * factorial(n - 1);
}

console.log("Sum of 5:", sumOfN(5)); // Expected: 15 (5+4+3+2+1)
console.log("Factorial of 5:", factorial(5)); // Expected: 120 (5*4*3*2*1)

/**
 * Titan Note:
 * Each call 'waits' for the next call to return its value.
 * factorial(5) waits for factorial(4), which waits for factorial(3)...
 * Once factorial(1) returns 1, the chain resolves backwards.
 */
