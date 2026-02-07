/**
 * Problem: String to Integer (atoi) - LeetCode 8
 * Pattern: Sequential Processing (Trim -> Sign -> Digits -> Overflow)
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function myAtoi(s) {
    let i = 0;
    let sign = 1;
    let result = 0;
    const n = s.length;
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // 1. Skip leading whitespaces
    while (i < n && s[i] === ' ') {
        i++;
    }

    // 2. Check for sign
    if (i < n && (s[i] === '-' || s[i] === '+')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // 3. Read digits
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        const digit = parseInt(s[i]); // Convert char to number

        // Check for Overflow BEFORE adding the digit
        // If result is already greater than max/10, adding any digit will overflow
        if (result > Math.floor(INT_MAX / 10) ||
            (result === Math.floor(INT_MAX / 10) && digit > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
}

// --- TEST CASES ---
console.log(myAtoi("42"));              // 42
console.log(myAtoi("   -42"));          // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("words and 987"));   // 0 (Starts with non-digit)
console.log(myAtoi("-91283472332"));    // -2147483648 (INT_MIN clamped)
