/**
 * Problem: Longest Substring Without Repeating Characters (LeetCode 3)
 * Pattern: Variable Size Sliding Window (The Rubber Band) 🧶
 * 
 * Input: s = "abcabcbb"
 * Output: 3 ("abc")
 * 
 * --- Logic ---
 * 1. Window Size Fix nahi hai.
 * 2. Humein window ko "Kheechte" (Expand) rehna hai jab tak unique hai.
 * 3. Jaise hi Duplicate aaye -> Peeche se "Shrink" karo.
 * 
 * Tool: Set (To check duplicates instantly).
 * 
 * Execution `abcabcbb`:
 * - [a] -> Unique. Expand. Max=1.
 * - [ab] -> Unique. Expand. Max=2.
 * - [abc] -> Unique. Expand. Max=3.
 * - [abca] -> Duplicate 'a'! 
 *      - Shrink Left (Remove 'a'). Window: `[bca]`. Now Unique.
 * - [bcab] -> Duplicate 'b'!
 *      - Shrink Left (Remove 'b'). Window: `[cab]`. Now Unique.
 * 
 * Formula: `MaxLen = Math.max(MaxLen, right - left + 1)`
 */

function lengthOfLongestSubstring(s) {
    let n = s.length;
    let left = 0;
    let right = 0;
    let maxLen = 0;

    // Set to store characters in CURRENT window
    let charSet = new Set();

    while (right < n) {
        let incomingChar = s[right];

        // Step 1: SHRINK (Agar Duplicate hai, to left se hatao jab tak duplicate na chala jaye)
        while (charSet.has(incomingChar)) {
            let outgoingChar = s[left];
            charSet.delete(outgoingChar);
            left++;
        }

        // Step 2: EXPAND (Add new char to window)
        charSet.add(incomingChar);

        // Step 3: UPDATE RESULT (Window size)
        maxLen = Math.max(maxLen, right - left + 1);

        // Move Forward
        right++;
    }

    return maxLen;
}

console.log("Longest Substring ('abcabcbb'):", lengthOfLongestSubstring("abcabcbb"));
console.log("Longest Substring ('bbbbb'):", lengthOfLongestSubstring("bbbbb"));
console.log("Longest Substring ('pwwkew'):", lengthOfLongestSubstring("pwwkew"));
