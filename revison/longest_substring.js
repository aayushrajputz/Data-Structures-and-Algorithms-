/**
 * Problem: Longest Substring Without Repeating Characters (LeetCode 3)
 * Difficulty: Medium
 * Pattern: Sliding Window
 */

function lengthOfLongestSubstring(s) {
    let map = new Map(); // Character -> Latest Index store karne ke liye
    let maxLen = 0;
    let l = 0; // Left pointer of window

    for (let r = 0; r < s.length; r++) {
        let char = s[r];

        // 1. Agar character pehle se window ke andar hai
        if (map.has(char) && map.get(char) >= l) {
            // Left pointer ko duplicate ke thoda aage jump karwa do
            l = map.get(char) + 1;
        }

        // 2. Map me current character ka latest index store/update karo
        map.set(char, r);

        // 3. Current window ki length calculate karo aur max length update karo
        maxLen = Math.max(maxLen, r - l + 1);
    }

    return maxLen;
}

// Test cases
console.log("Result 1:", lengthOfLongestSubstring("abcabcbb")); // Expected: 3 ("abc")
console.log("Result 2:", lengthOfLongestSubstring("bbbbb"));    // Expected: 1 ("b")
console.log("Result 3:", lengthOfLongestSubstring("pwwkew"));   // Expected: 3 ("wke")
