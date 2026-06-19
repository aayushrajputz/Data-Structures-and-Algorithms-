/*
Problem Statement: 212. Word Search II (DFS + Trie)
--------------------------------------------------
Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where 
"adjacent" cells are horizontally or vertically neighboring. The same letter 
cell may not be used more than once in a word.

Example 1:
Input: board = [
  ["o","a","a","n"],
  ["e","t","a","e"],
  ["i","h","k","r"],
  ["i","f","l","v"]
], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]

Example 2:
Input: board = [
  ["a","b"],
  ["c","d"]
], words = ["abcb"]
Output: []
*/

class TrieNode {
    constructor() {
        this.children = Array(26).fill(null);
        this.word = null; // Store the complete word at the leaf node for easy extraction
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let curr = this.root;
        for (let i = 0; i < word.length; i++) {
            let index = word.charCodeAt(i) - 97;
            if (curr.children[index] === null) {
                curr.children[index] = new TrieNode();
            }
            curr = curr.children[index];
        }
        curr.word = word; // Mark the end of the word by storing the word itself
    }
}

function findWords(board, words) {
    let trie = new Trie();
    for (let word of words) {
        trie.insert(word);
    }

    let res = [];
    let rows = board.length;
    let cols = board[0].length;

    function dfs(r, c, node) {
        // 1. Boundary & Visited Checks
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] === '#') return;

        let char = board[r][c];
        let idx = char.charCodeAt(0) - 97;

        // 2. Trie Check (Pruning)
        if (node.children[idx] === null) return;

        let nextNode = node.children[idx];

        // 3. Word found check
        if (nextNode.word !== null) {
            res.push(nextNode.word);
            nextNode.word = null; // Duplicate check (avoid pushing same word again)
        }

        // 4. Backtracking step (Mark visited)
        board[r][c] = '#';

        // 5. Recurse 4 directions
        dfs(r + 1, c, nextNode);
        dfs(r - 1, c, nextNode);
        dfs(r, c + 1, nextNode);
        dfs(r, c - 1, nextNode);

        // 6. Restore character
        board[r][c] = char;
    }

    // Board ke har cell se start karo
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            dfs(r, c, trie.root);
        }
    }

    return res;
}

// Test cases
let board1 = [
    ["o","a","a","n"],
    ["e","t","a","e"],
    ["i","h","k","r"],
    ["i","f","l","v"]
];
console.log("Test 1:", findWords(board1, ["oath","pea","eat","rain"])); // Expected: ["eat","oath"]

let board2 = [["a","b"],["c","d"]];
console.log("Test 2:", findWords(board2, ["abcb"])); // Expected: []
