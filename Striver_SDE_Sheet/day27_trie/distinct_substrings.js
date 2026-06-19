/*
Problem Statement: Number of Distinct Substrings in a String
------------------------------------------------------------
Given a string 'S', you need to find the total number of distinct substrings 
(including the empty string) that can be formed from 'S'.

Example:
Input: S = "abab"
Output: 8

Explanation:
All distinct substrings of "abab" are:
"", "a", "b", "ab", "ba", "aba", "bab", "abab"
Total count = 8.
*/

class TrieNode {
    constructor() {
        this.children = Array(26).fill(null);
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(s) {
        let curr = this.root;
        for (let i = 0; i < s.length; i++) {
            let index = s.charCodeAt(i) - 'a'.charCodeAt(0);
            if (curr.children[index] == null) {
                curr.children[index] = new TrieNode();
            }
            curr = curr.children[index];
        }
    }

}

function distinctSubstrings(s) {
    let count = 1;
    let trie = new Trie();
    for (let i = 0; i < s.length; i++) {
        let curr = trie.root;
        for (let j = i; j < s.length; j++) {
            let index = s.charCodeAt(j) - 'a'.charCodeAt(0);
            if (curr.children[index] == null) {
                curr.children[index] = new TrieNode();
                count++;
            }
            curr = curr.children[index];
        }
    }
    return count;
}
// Test case
console.log("Distinct Substrings:", distinctSubstrings("abab")); // Expected: 8
