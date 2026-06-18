class trieNode {
    constructor() {
        this.children = Array(26).fill(null);
        this.isEnd = false;
    }
}

class trie {
    constructor() {
        this.root = new trieNode()
    }
    insert(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word[i].charCodeAt(0) - 97;
            if (curr.children[index] === null) {
                curr.children[index] = new trieNode()
            }
            curr = curr.children[index]
        }
        curr.isEnd = true;
    }
    search(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word[i].charCodeAt(0) - 97;
            if (curr.children[index] === null) {
                return false;
            }
            curr = curr.children[index];
        }
        return curr.isEnd;
    }
    startsWith(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word[i].charCodeAt(0) - 97;
            if (curr.children[index] === null) {
                return false;
            }
            curr = curr.children[index];
        }
        return true;
    }
}
