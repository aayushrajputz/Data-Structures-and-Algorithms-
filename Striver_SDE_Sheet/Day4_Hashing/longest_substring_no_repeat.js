/**
 * LeetCode 3: Longest Substring Without Repeating Characters
 * Approach: Optimized Sliding Window (O(N))
 * Time Complexity: O(N)
 * Space Complexity: O(min(m, n)) - map to store char indices
 */

var lengthOfLongestSubstring = function (s) {
    let n = s.length;
    let map = new Map(); // Store { char : latest_index }
    let left = 0;
    let maxLen = 0;

    for (let right = 0; right < n; right++) {
        let char = s[right];

        // 1. If character is already in map, jump left pointer
        if (map.has(char)) {
            // CRITICAL: We only jump left IF the found index is within current window
            // This is why we use Math.max
            left = Math.max(left, map.get(char) + 1);
        }

        // 2. Update character's latest index in map
        map.set(char, right);

        // 3. Calculate window size and update maxLen
        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
};

// Test Cases
console.log("Output for 'abcabcbb':", lengthOfLongestSubstring("abcabcbb")); // Expected: 3 ("abc")
console.log("Output for 'bbbbb':", lengthOfLongestSubstring("bbbbb"));       // Expected: 1 ("b")
console.log("Output for 'pwwkew':", lengthOfLongestSubstring("pwwkew"));     // Expected: 3 ("wke")
console.log("Output for 'abba':", lengthOfLongestSubstring("abba"));         // Expected: 2 ("ab" or "ba")
