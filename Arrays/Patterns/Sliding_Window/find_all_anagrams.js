/**
 * Problem: Find All Anagrams in a String (LeetCode 438)
 * Pattern: Fixed Window + Hashing (Frequency Map) 📊
 * 
 * Input: s = "cbaebabacd", p = "abc"
 * Output: [0, 6]
 * (Index 0: "cba" is anagram of "abc")
 * (Index 6: "bac" is anagram of "abc")
 * 
 * --- Logic ---
 * 1. Window Size `k` = length of `p` (3).
 * 2. Goal: Check if Current Window is an Anagram of `p`.
 * 
 * Tool: Frequency Map (Day 3 wala logic).
 * 
 * Step 1: Count Frequency of `p`.
 *    p = "abc" -> {a:1, b:1, c:1}
 * 
 * Step 2: First Window (0 to k-1)
 *    s = "cba..." -> Window "cba" -> {a:1, b:1, c:1}
 *    Compare Map P vs Map Window. SAME? -> Index 0 push karo.
 * 
 * Step 3: SLIDE (Add New - Remove Old)
 *    - Remove 'c' (decrement count).
 *    - Add 'e' (increment count).
 *    - Compare Maps.
 * 
 * optimization: Map compare karne mein O(26) lagta hai (constant).
 */

function findAnagrams(s, p) {
    let result = [];
    let k = p.length;
    let n = s.length;

    if (n < k) return [];

    // Frequency Maps (Arrays for 'a'-'z')
    let pCount = new Array(26).fill(0);
    let windowCount = new Array(26).fill(0);

    // Helper to map char 'a'->0, 'b'->1...
    function getIndex(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    // Step 1: Fill P-Count and First Window
    for (let i = 0; i < k; i++) {
        pCount[getIndex(p[i])]++;
        windowCount[getIndex(s[i])]++;
    }

    // Check first window
    if (arraysEqual(pCount, windowCount)) {
        result.push(0);
    }

    // Step 2: Slide Logic
    for (let i = k; i < n; i++) {
        // A. REMOVE Old (s[i-k])
        let charToRemove = s[i - k];
        windowCount[getIndex(charToRemove)]--;

        // B. ADD New (s[i])
        let charToAdd = s[i];
        windowCount[getIndex(charToAdd)]++;

        // C. CHECK Match
        if (arraysEqual(pCount, windowCount)) {
            result.push(i - k + 1); // Start index of window
        }
    }

    return result;
}

// Helper to compare strictly
function arraysEqual(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

console.log(findAnagrams("cbaebabacd", "abc"));
