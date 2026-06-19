/*
Problem Statement: Complete String (Longest Word with all Prefixes)
------------------------------------------------------------------
Given an array of strings 'A', find the longest string in 'A' such that 
every prefix of this string is also present in 'A'.

If there are multiple longest strings with the same length, return the 
lexicographically smallest one. If no such string exists, return "None".

Example:
Input: A = ["n", "ni", "nin", "ninj", "ninja", "ninga"]
Output: "ninja"

Explanation:
- Prefixes of "ninja" are: "n", "ni", "nin", "ninj", "ninja". All are present in 'A'.
- Prefixes of "ninga" are: "n", "ni", "nin", "ning", "ninga". But "ning" is NOT present in 'A'.
- Hence, "ninja" is the longest complete string.
*/

class TrieNode {
    constructor() {
        this.children = Array(26).fill(null);
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 'a'.charCodeAt(0);
            if (curr.children[index] === null) {
                curr.children[index] = new TrieNode();
            }
            curr = curr.children[index];
        }
        curr.isEnd = true; // Mark the end of the word
    }

    checkIfAllPrefixesExist(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 'a'.charCodeAt(0);
            if (curr.children[index] === null) {
                return false;
            }
            curr = curr.children[index];
            if (curr.isEnd === false) {
                return false; // If prefix is not a valid word
            }
        }
        return true;
    }
}

function completeString(n, a) {
    const trie = new Trie();
    
    // Step 1: Insert all words into the Trie first
    for (let i = 0; i < n; i++) {
        trie.insert(a[i]);
    }

    let longest = "";

    // Step 2: Now check each word for complete prefixes
    for (let i = 0; i < n; i++) {
        if (trie.checkIfAllPrefixesExist(a[i])) {
            if (a[i].length > longest.length) {
                longest = a[i];
            } else if (a[i].length === longest.length && a[i] < longest) {
                longest = a[i];
            }
        }
    }

    if (longest === "") {
        return "None";
    }
    return longest;
}

// Test cases
const A = ["n", "ni", "nin", "ninj", "ninja", "ninga"];
console.log("Longest Complete String:", completeString(A.length, A)); // Expected: "ninja"
