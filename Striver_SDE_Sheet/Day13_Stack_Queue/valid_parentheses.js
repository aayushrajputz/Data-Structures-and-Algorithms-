/**
 * Problem: Valid Parentheses (LeetCode 20)
 * Logic: Use a Stack to keep track of opening brackets.
 * Match closing brackets with the most recent opening bracket (LIFO).
 */

const isValid = function (s) {
    const stack = [];
    // Map for easy lookup: Closing -> Opening
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        // Check if the character is a closing bracket
        if (map[char]) {
            // If it's a closing bracket, pop the top element
            const topElement = stack.length === 0 ? '#' : stack.pop();

            // clear logic: The popped literal must match the mapping
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            // It is an opening bracket, push to stack
            stack.push(char);
        }
    }

    // Valid only if stack is empty (all opened brackets are closed)
    return stack.length === 0;
};

// --- TEST CASES ---
console.log("Test '()':", isValid("()"));       // Expected: true
console.log("Test '()[]{}':", isValid("()[]{}")); // Expected: true
console.log("Test '(]':", isValid("(]"));       // Expected: false
console.log("Test '([)]':", isValid("([)]"));   // Expected: false
console.log("Test '{[]}':", isValid("{[]}"));   // Expected: true
console.log("Test '[':", isValid("["));         // Expected: false
