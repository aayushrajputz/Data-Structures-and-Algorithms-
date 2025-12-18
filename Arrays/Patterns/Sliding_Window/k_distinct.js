/**
 * Problem: Longest Substring/Subarray with At Most K Distinct Characters
 * Pattern: Variable Sliding Window + Hash Map
 * 
 * Logic:
 * 1. Expand 'right' pointer and add character to Map (increment its count).
 * 2. If Map.size > K (too many unique characters):
 *    - Shrink from 'left'
 *    - Decrement count in Map
 *    - If count becomes 0, DELETE key from Map (this reduces Map.size)
 * 3. Update maxLength = Math.max(maxLength, right - left + 1)
 */

function lengthOfLongestSubstringKDistinct(s, k) {
    if (k === 0) return 0;

    let map = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        let charRight = s[right];
        map.set(charRight, (map.get(charRight) || 0) + 1);

        // Jab tak unique characters K se zyada hain
        while (map.size > k) {
            let charLeft = s[left];
            map.set(charLeft, map.get(charLeft) - 1);

            if (map.get(charLeft) === 0) {
                map.delete(charLeft); // Key delete karna zaroori hai Map.size kam karne ke liye
            }
            left++;
        }

        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Test Cases
console.log("Test 1 ('eceba', k=2):", lengthOfLongestSubstringKDistinct("eceba", 2)); // Expected: 3 ("ece")
console.log("Test 2 ('aa', k=1):", lengthOfLongestSubstringKDistinct("aa", 1));     // Expected: 2 ("aa")
console.log("Test 3 ('abaccc', k=2):", lengthOfLongestSubstringKDistinct("abaccc", 2)); // Expected: 4 ("accc")
