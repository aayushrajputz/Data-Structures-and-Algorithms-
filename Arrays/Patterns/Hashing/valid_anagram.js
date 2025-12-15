/**
 * Problem: Valid Anagram (LeetCode 242)
 * Goal: Check if string 't' is an anagram of string 's'.
 * Anagram = Same characters, Same frequency. (Order doesn't matter).
 * Example: "anagram" vs "nagaram" -> TRUE.
 * Example: "rat" vs "car" -> FALSE.
 * 
 * --- Pattern: Frequency Map 📊 ---
 * Sirf existence check (`Set`) kaafi nahi hai. Humein COUNT bhi chahiye.
 * 
 * Logic:
 * 1. Check Length: Agar alag hai, to Anagram ho hi nahi sakta.
 * 2. Count 's': Ek Map/Object banao aur 's' ke chars count karo.
 *    - Example: {a: 3, n: 1, g: 1, r: 1, m: 1}
 * 3. Verify 't': 't' ke chars scan karo aur count KAM (decrement) karte jao.
 *    - Agar koi char Map mein nahi mila ya count < 0 ho gaya -> FALSE.
 */

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    // JavaScript Object as Hash Map (Best for char counting)
    let charCount = {};

    // Step 1: Count chars in 's'
    for (let char of s) {
        // Agar pehle se hai to +1, nahi to 1 initialize karo
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Step 2: Decrement for 't'
    for (let char of t) {
        // Case A: Char exist hi nahi karta
        // Case B: Count 0 ho chuka hai (Matlab 't' mein zyada baar aa gaya)
        if (!charCount[char]) {
            return false;
        }
        charCount[char]--;
    }

    return true;
}

console.log("Anagram (anagram, nagaram):", isAnagram("anagram", "nagaram")); // true
console.log("Anagram (rat, car):", isAnagram("rat", "car")); // false
