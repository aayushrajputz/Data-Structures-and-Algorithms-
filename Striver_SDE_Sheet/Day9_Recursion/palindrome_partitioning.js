/**
 * Problem: Palindrome Partitioning (Striver SDE Sheet Day 9)
 * Goal: Partition string s such that every substring of the partition is a palindrome.
 */

function isPalindrome(s, start, end) {
    while (start <= end) {
        if (s[start++] !== s[end--]) return false;
    }
    return true;
}

function partition(s) {
    const result = [];
    const currentPath = [];

    function solve(index) {
        // Base Case: If we reached the end of the string
        if (index === s.length) {
            result.push([...currentPath]);
            return;
        }

        for (let i = index; i < s.length; i++) {
            // Check if substring from 'index' to 'i' is palindrome
            if (isPalindrome(s, index, i)) {
                // If yes, PICK this partition
                currentPath.push(s.substring(index, i + 1));
                
                // Move deep for the remaining string
                solve(i + 1);
                
                // BACKTRACK: Undo the pick for the next iteration
                currentPath.pop();
            }
        }
    }

    solve(0);
    return result;
}

// TEST CASE
const s = "aab";
console.log(`String: "${s}"`);
console.log("Palindromic Partitions:", JSON.stringify(partition(s)));
