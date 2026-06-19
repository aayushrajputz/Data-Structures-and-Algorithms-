# Trie Pattern Cheat Sheet 🚀

Here are the standard templates for Trie patterns in JavaScript. Use these as a quick reference when you forget the structure.

---

## 1. Standard Trie Template (String / Char Search)

Useful for: Word insertion, search, prefix checks, and counting.

```javascript
class TrieNode {
    constructor() {
        this.children = Array(26).fill(null);
        this.isEnd = false;
        // For Trie-II, add:
        // this.cntPrefix = 0;
        // this.cntEnd = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word
    insert(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 97; // 'a' is 97
            if (curr.children[index] === null) {
                curr.children[index] = new TrieNode();
            }
            curr = curr.children[index];
        }
        curr.isEnd = true;
    }

    // Search a complete word
    search(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 97;
            if (curr.children[index] === null) return false;
            curr = curr.children[index];
        }
        return curr.isEnd;
    }

    // Check if any word starts with prefix
    startsWith(prefix) {
        let curr = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let index = prefix.charCodeAt(i) - 97;
            if (curr.children[index] === null) return false;
            curr = curr.children[index];
        }
        return true;
    }
}
```

---

## 2. Binary / Bitwise Trie Template (Max XOR / Numbers)

Useful for: Bitwise operations, Max XOR, Queries.

```javascript
class BinaryTrieNode {
    constructor() {
        this.links = Array(2).fill(null); // index 0 for bit '0', index 1 for bit '1'
    }
}

class BinaryTrie {
    constructor() {
        this.root = new BinaryTrieNode();
    }

    // Insert a 32-bit integer
    insert(num) {
        let curr = this.root;
        for (let i = 30; i >= 0; i--) {
            let bit = (num >> i) & 1;
            if (curr.links[bit] === null) {
                curr.links[bit] = new BinaryTrieNode();
            }
            curr = curr.links[bit];
        }
    }

    // Find maximum XOR pair for a given number
    getMaxXOR(num) {
        let curr = this.root;
        if (curr.links[0] === null && curr.links[1] === null) return -1; // Empty Trie
        
        let maxNum = 0;
        for (let i = 30; i >= 0; i--) {
            let bit = (num >> i) & 1;
            let oppositeBit = 1 - bit;
            
            // Try to go to the opposite bit to make the XOR bit '1'
            if (curr.links[oppositeBit] !== null) {
                maxNum = maxNum | (1 << i); // Set i-th bit to 1
                curr = curr.links[oppositeBit];
            } else {
                curr = curr.links[bit];
            }
        }
        return maxNum;
    }
}
```
