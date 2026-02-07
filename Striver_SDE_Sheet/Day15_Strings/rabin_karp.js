/**
 * Problem: Rabin-Karp Algorithm (Pattern Searching)
 * Approach: Rolling Hash (Base 256, Prime 101)
 * Principles: Clean Code, Meaningful Variable Names
 * Time Complexity: O(N + M) Average Case
 */

class Solution {
    // Function to check if the pattern exists in the string or not.
    search(text, pattern) {
        if (!text || !pattern || pattern.length > text.length) return [];

        const BASE = 256;      // Number of characters in input alphabet
        const PRIME = 1000000007;     // A larger prime number to minimize collisions
        const N = text.length;
        const M = pattern.length;

        let patternHash = 0;
        let windowHash = 0;
        let highPlaceValue = 1; // Represents BASE^(M-1) % PRIME

        // 1. Pre-calculate highPlaceValue: BASE^(M-1) % PRIME
        for (let i = 0; i < M - 1; i++) {
            highPlaceValue = (highPlaceValue * BASE) % PRIME;
        }

        // 2. Calculate initial hash values for pattern and first window of text
        for (let i = 0; i < M; i++) {
            patternHash = (BASE * patternHash + pattern.charCodeAt(i)) % PRIME;
            windowHash = (BASE * windowHash + text.charCodeAt(i)) % PRIME;
        }

        const matches = [];

        // 3. Slide the window over text one by one
        for (let i = 0; i <= N - M; i++) {

            // Step A: Check if hash values match
            if (patternHash === windowHash) {
                // Step B: Double-check characters to avoid collisions
                let isMatch = true;
                for (let j = 0; j < M; j++) {
                    if (text[i + j] !== pattern[j]) {
                        isMatch = false;
                        break;
                    }
                }
                if (isMatch) {
                    matches.push(i + 1); // 1-based indexing
                }
            }

            // Step C: Calculate hash for next window (Rolling Hash Logic)
            if (i < N - M) {
                // Remove Leading Character: text[i]
                let leadingValue = (text.charCodeAt(i) * highPlaceValue) % PRIME;
                windowHash = (windowHash - leadingValue + PRIME) % PRIME; // ensure positive

                // Shift Left
                windowHash = (windowHash * BASE) % PRIME;

                // Add Trailing Character: text[i + M]
                windowHash = (windowHash + text.charCodeAt(i + M)) % PRIME;
            }
        }

        return matches;
    }
}

// --- TEST CASE ---
const sol = new Solution();
const textSample = "batmanandrobinarebat";
const patternSample = "bat";
console.log(`Text:    ${textSample}`);
console.log(`Pattern: ${patternSample}`);
console.log("Matches (1-based):", sol.search(textSample, patternSample));
