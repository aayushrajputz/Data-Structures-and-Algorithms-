/**
 * Problem: Longest Palindromic Substring (LeetCode 5)
 * Pattern: Expand from Center (O(N^2) Time, O(1) Space)
 */

function longestPalindrome(s) {
    if (!s || s.length < 1) return "";
    
    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        // Expand for ODD length (e.g., "aba")
        let len1 = expandFromCenter(s, i, i);
        // Expand for EVEN length (e.g., "abba")
        let len2 = expandFromCenter(s, i, i + 1);
        
        let maxLen = Math.max(len1, len2);
        
        // Update the boundaries of the longest palindrome found
        if (maxLen > end - start) {
            // Logic: start = i - (len-1)/2, end = i + len/2
            start = i - Math.floor((maxLen - 1) / 2);
            end = i + Math.floor(maxLen / 2);
        }
    }

    return s.substring(start, end + 1);
}

function expandFromCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    // Length is (right - 1) - (left + 1) + 1 = right - left - 1
    return right - left - 1;
}

// --- TEST CASE ---
const input = "babad";
console.log("Input:  '" + input + "'");
const result = longestPalindrome(input);
console.log("Output: '" + result + "'"); // Expected: "bab" or "aba"
