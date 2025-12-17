/**
 * Problem: Find All Anagrams in a String (LeetCode 438)
 * 
 * Logic discussed:
 * 1. Brute Force (Sort) -> O(N * K log K) -> Too Slow ❌
 * 2. Optimal (Frequency Map/Array) -> O(N) ✅
 * 
 * Task: Implement the Sliding Window + Frequency Array Logic below.
 * Hint: 
 * - Use 'a'.charCodeAt(0) to map characters to 0-25 index.
 * - Need two arrays: pCount and windowCount.
 */

function findAnagrams(s, p) {
    const pCount = new Array(26).fill(0);
    const windowCount = new Array(26).fill(0);
    let result = [];

    // Helper: 'a' ko 0 banata hai, 'b' ko 1
    function getIndex(char) {
        return char.charCodeAt(0) - 'a'.charCodeAt(0);
    }

    // Step 1: Pehli Window Fill karo
    for (let i = 0; i < p.length; i++) {
        pCount[getIndex(p[i])]++;
        windowCount[getIndex(s[i])]++;
    }

    // Step 2: Check First Window
    if (arraysEqual(pCount, windowCount)) {
        result.push(0);
    }


    // Step 3: Slide the Window (Loop starts from k)
    // Ab hum Loop chalayenge baaki string ke liye
    // Logic: Remove Old (s[i-k]), Add New (s[i])
    let k = p.length;
    for (let i = k; i < s.length; i++) {
        // Remove Old
        let charToRemove = s[i - k];
        windowCount[getIndex(charToRemove)]--;

        // Add New
        let charToAdd = s[i];
        windowCount[getIndex(charToAdd)]++;

        // Check Match
        if (arraysEqual(pCount, windowCount)) {
            result.push(i - k + 1);
        }
    }

    return result;
}

// Helper to compare arrays
function arraysEqual(arr1, arr2) {
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

// --- Test Cases ---
console.log("Test Case 1 (s='cbaebabacd', p='abc'):", findAnagrams("cbaebabacd", "abc"));
// Expected: [0, 6]

console.log("Test Case 2 (s='abab', p='ab'):", findAnagrams("abab", "ab"));
// Expected: [0, 1, 2]

console.log("Test Case 3 (s='acdca', p='c'):", findAnagrams("acdca", "c"));
// Expected: [1, 3]