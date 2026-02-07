/**
 * Problem: Roman to Integer (LeetCode 13)
 * Pattern: Left-to-Right Comparison (Look-ahead)
 * Time Complexity: O(N) where N is the length of string
 * Space Complexity: O(1)
 */

function romanToInt(s) {
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = romanMap[s[i + 1]];

        // SUBTRACTION RULE: If current < next, it's a special pair (IV, IX, etc.)
        if (nextVal > currentVal) {
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }

    return total;
}

// --- TEST CASES ---
console.log("Input: 'MCMXCIV' (1994) | Output:", romanToInt("MCMXCIV"));
console.log("Input: 'LVIII' (58)    | Output:", romanToInt("LVIII"));
