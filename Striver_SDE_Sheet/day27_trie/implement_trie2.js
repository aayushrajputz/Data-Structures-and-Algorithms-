class trieNode {
    constructor() {
        this.children = Array(26).fill(null)
        this.cntEnd = 0;
        this.cntPrefix = 0;
    }

}

class trie {
    constructor() {
        this.root = new trieNode();
    }
    insert(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 'a'.charCodeAt(0);
            if (curr.children[index] === null) {
                curr.children[index] = new trieNode();
            }
            curr = curr.children[index];
            curr.cntPrefix++;

        }
        curr.cntEnd++;
    }
    countWordsEqualTo(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 'a'.charCodeAt(0);
            if (curr.children[index] === null) {
                return 0;
            }
            curr = curr.children[index];
        }
        return curr.cntEnd;
    }
    countWordsStartingWith(prefix) {
        let curr = this.root;
        for (let i = 0; i < prefix.length; i++) {
            let index = prefix.charCodeAt(i) - 'a'.charCodeAt(0);
            if (curr.children[index] === null) {
                return 0; // Return 0 instead of false for word counts
            }
            curr = curr.children[index];
        }
        return curr.cntPrefix;
    }
    erase(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 'a'.charCodeAt(0);
            curr = curr.children[index];
            curr.cntPrefix--;
        }
        curr.cntEnd--;
    }
}

// Test cases to verify the implementation
const t = new trie();
t.insert("apple");
t.insert("apple");
t.insert("apps");
console.log("Count equal to 'apple':", t.countWordsEqualTo("apple")); // Expected: 2
console.log("Count starting with 'app':", t.countWordsStartingWith("app")); // Expected: 3
t.erase("apple");
console.log("Count equal to 'apple' after erasing one:", t.countWordsEqualTo("apple")); // Expected: 1
console.log("Count starting with 'app' after erasing one apple:", t.countWordsStartingWith("app")); // Expected: 2

