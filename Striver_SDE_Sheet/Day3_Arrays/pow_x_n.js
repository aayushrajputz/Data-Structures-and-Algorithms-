/**
 * LeetCode 50: Pow(x, n)
 * Time Complexity: O(log N)
 * Space Complexity: O(1)
 */

function myPow(x, n) {
    // If n is negative, convert x and n
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    let ans = 1;
    let current_x = x;
    let current_n = n;

    while (current_n > 0) {
        if (current_n % 2 === 1) {
            // If n is Odd
            ans = ans * current_x;
            current_n = current_n - 1;
        } else {
            // If n is Even
            current_x = current_x * current_x;
            current_n = current_n / 2;
        }
    }

    return ans;
}

// Test Cases
console.log("2^10:", myPow(2, 10));    // Expected: 1024
console.log("2^-2:", myPow(2, -2));    // Expected: 0.25
console.log("3^5:", myPow(3, 5));      // Expected: 243
