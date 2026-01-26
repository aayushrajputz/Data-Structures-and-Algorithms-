/**
 * Problem: Word Break II (Print all ways)
 * s = "catsanddog"
 * wordDict = ["cat", "cats", "and", "sand", "dog"]
 * Output: ["cat sand dog", "cats and dog"]
 * 
 * Logic:
 * 1. Build a HashSet from wordDict for O(1) lookups.
 * 2. Backtrack from index 0.
 * 3. In each recursion, try different prefix lengths.
 * 4. If prefix is in dict, recurse for the rest.
 */

function wordBreak(s, wordDict) {
    const result = [];
    const dict = new Set(wordDict);

    function solve(index, currentSentence) {
        // Base Case: String khatam
        if (index === s.length) {
            result.push(currentSentence.trim());
            return;
        }

        // Try every possible substring from 'index'
        for (let j = index; j < s.length; j++) {
            let word = s.substring(index, j + 1);
            
            if (dict.has(word)) {
                // Pre-pend space if it's not the first word
                let newSentence = currentSentence === "" ? word : currentSentence + " " + word;
                
                // Recurse for the remaining part
                solve(j + 1, newSentence);
            }
        }
    }

    solve(0, "");
    return result;
}

// Test Case
const s = "catsanddog";
const wordDict = ["cat", "cats", "and", "sand", "dog"];
console.log(wordBreak(s, wordDict));
