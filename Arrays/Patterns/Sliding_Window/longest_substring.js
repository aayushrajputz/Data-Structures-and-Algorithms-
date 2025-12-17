/**
 * Problem: Longest Substring Without Repeating Characters (LeetCode 3)
 * Difficulty: Medium (Variable Sliding Window)
 * 
 * Concept: Rubber Band Strategy 
 * 1. Expand Window (Right) -> Add char
 * 2. If Duplicate found -> Shrink Window (Left) until duplicate is gone
 * 3. Calculate Logic
 * 
 * Example: s = "abcabcbb"
 * Output: 3 ("abc")
 */

function lengthOfLongestSubstring(s) {
    let currentSet = new Set();
    let L = 0;
    let maxLength = 0;
    for (let R = 0; R < s.length; R++) {
        while (currentSet.has(s[R])) {
            currentSet.delete(s[L])
            L++
        }
        currentSet.add(s[R])
        maxLength = Math.max(maxLength, R - L + 1)
    }
    return maxLength;
};

// Test Cases
console.log("Test 1 (abcabcbb):", lengthOfLongestSubstring("abcabcbb")); // Expected: 3
console.log("Test 2 (bbbbb):", lengthOfLongestSubstring("bbbbb"));       // Expected: 1
console.log("Test 3 (pwwkew):", lengthOfLongestSubstring("pwwkew"));     // Expected: 3
console.log("Test 4 (Empty):", lengthOfLongestSubstring(""));            // Expected: 0
console.log("Test 5 (au):", lengthOfLongestSubstring("au"));             // Expected: 2
console.log("✅ All Tests Executed.");