/*
Problem Statement: 211. Design Add and Search Words Data Structure
------------------------------------------------------------------
Design a data structure that supports adding new words and finding if a string 
matches any previously added string.

Implement the WordDictionary class:
- WordDictionary() Initializes the object.
- void addWord(word) Adds word to the data structure, it can be matched later.
- bool search(word) Returns true if there is any string in the data structure that 
  matches word or false otherwise. word may contain dots '.' where dots can 
  match any letter.

Example:;
WordDictionary wordDictionary = new WordDictionary()
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True
*/

class TrieNode {
    constructor() {
        this.children = Array(26).fill(null);
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let charIndex = word.charCodeAt(i) - 97;
            if (curr.children[charIndex] === null) {
                curr.children[charIndex] = new TrieNode();
            }
            curr = curr.children[charIndex];
        }
        curr.isEnd = true;
    }

    search(word) {
        const dfs = (index, node) => {
            if (index === word.length) {
                return node.isEnd;
            }

            let char = word[index];

            if (char === '.') {
                for (let i = 0; i < 26; i++) {
                    if (node.children[i] !== null) {
                        if (dfs(index + 1, node.children[i])) {
                            return true;
                        }
                    }
                }
                return false;
            } else {
                let charIndex = char.charCodeAt(0) - 97;
                if (node.children[charIndex] === null) {
                    return false;
                }
                return dfs(index + 1, node.children[charIndex]);
            }
        };

        return dfs(0, this.root);
    }
}

// Test cases
const wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");

console.log("Search 'pad':", wordDictionary.search("pad")); // Expected: false
console.log("Search 'bad':", wordDictionary.search("bad")); // Expected: true
console.log("Search '.ad':", wordDictionary.search(".ad")); // Expected: true
console.log("Search 'b..':", wordDictionary.search("b..")); // Expected: true
