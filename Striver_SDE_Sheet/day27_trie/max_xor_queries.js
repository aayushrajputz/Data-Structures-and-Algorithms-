/*
Problem Statement: Maximum XOR With an Element From Array (Queries)
------------------------------------------------------------------
You are given an array 'NUMS' consisting of non-negative integers. You are also given 
a 2D array 'QUERIES' where QUERIES[i] = [Xi, Mi].

The answer to the i-th query is the maximum bitwise XOR value of Xi and any element 
of NUMS that does not exceed Mi. In other words, the answer is max(Xi ^ NUMS[j]) 
for all j such that NUMS[j] <= Mi.

If all elements in NUMS are larger than Mi, then the answer to the i-th query is -1.

Return an array consisting of the answers to all queries.

Example:
Input: NUMS = [0, 1, 2, 3, 4], QUERIES = [[3, 1], [1, 3], [5, 6]]
Output: [3, 3, 7]

Explanation:
1. First query [3, 1]: We need max(3 ^ NUMS[j]) where NUMS[j] <= 1.
   Valid elements are [0, 1].
   3 ^ 0 = 3, 3 ^ 1 = 2. Max is 3.
2. Second query [1, 3]: We need max(1 ^ NUMS[j]) where NUMS[j] <= 3.
   Valid elements are [0, 1, 2, 3].
   1 ^ 0 = 1, 1 ^ 1 = 0, 1 ^ 2 = 3, 1 ^ 3 = 2. Max is 3.
3. Third query [5, 6]: We need max(5 ^ NUMS[j]) where NUMS[j] <= 6.
   Valid elements are [0, 1, 2, 3, 4].
   5 ^ 4 = 1. 5 ^ 3 = 6. 5 ^ 2 = 7. Max is 7.
*/

class TrieNode {
    constructor() {
        this.links = Array(2).fill(null);
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(num) {
        let curr = this.root;
        for (let i = 30; i >= 0; i--) {
            let bit = (num >> i) & 1;
            if (curr.links[bit] === null) {
                curr.links[bit] = new TrieNode();
            }
            curr = curr.links[bit];
        }
    }

    getMax(num) {
        let curr = this.root;
        // If Trie is empty (nothing inserted yet), return -1
        if (curr.links[0] === null && curr.links[1] === null) {
            return -1;
        }
        let maxNum = 0;
        for (let i = 30; i >= 0; i--) {
            let bit = (num >> i) & 1;
            let oppositeBit = 1 - bit;
            if (curr.links[oppositeBit] !== null) {
                maxNum = maxNum | (1 << i);
                curr = curr.links[oppositeBit];
            } else if (curr.links[bit] !== null) {
                curr = curr.links[bit];
            } else {
                return -1;
            }
        }
        return maxNum;
    }
}

function maximizeXor(nums, queries) {
    nums.sort((a, b) => a - b)
    let sortQureies = queries.map((q, i) => [q[0], q[1], i])
    sortQureies.sort((a, b) => a[1] - b[1])
    let ans = new Array(queries.length)
    let trie = new Trie()


    // Sort queries by Mi
    let idx = 0;
    for (let i = 0; i < sortQureies.length; i++) {
        const [Xi, Mi, originalIndex] = sortQureies[i];

        while (idx < nums.length && nums[idx] <= Mi) {
            trie.insert(nums[idx])
            idx++
        }


        // Calculate max XOR
        ans[originalIndex] = trie.getMax(Xi)
    }
    return ans;
}

const nums = [0, 1, 2, 3, 4];
const queries = [[3, 1], [1, 3], [5, 6]];
console.log("Results:", maximizeXor(nums, queries)); // Expected: [3, 3, 7]
