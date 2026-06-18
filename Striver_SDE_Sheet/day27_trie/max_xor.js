// High-Performance Flat Array Trie Solution (O(N) Time, O(N) Space)
// Completely avoids object allocation overhead to prevent TLE in JS
var findMaximumXOR = function (nums) {
    const n = nums.length;
    // Max nodes possible = N * 31 bits + 2
    const maxNodes = n * 31 + 2;
    
    // Flat 1D array to represent 2D tree:
    // Left child (0-bit) of nodeId is at: nodeId * 2
    // Right child (1-bit) of nodeId is at: nodeId * 2 + 1
    const nextNode = new Int32Array(maxNodes * 2);
    let nodeCount = 1; // Root node is ID 0

    // 1. Fast Insert
    function insert(num) {
        let curr = 0; // Root node
        for (let i = 30; i >= 0; i--) {
            let bit = (num >> i) & 1;
            let idx = curr * 2 + bit;
            if (nextNode[idx] === 0) {
                nextNode[idx] = nodeCount++;
            }
            curr = nextNode[idx];
        }
    }

    // 2. Fast Search for Max XOR
    function getMaxXOR(num) {
        let curr = 0;
        let maxXOR = 0;
        for (let i = 30; i >= 0; i--) {
            let bit = (num >> i) & 1;
            let targetBit = 1 - bit;
            let targetIdx = curr * 2 + targetBit;

            if (nextNode[targetIdx] !== 0) {
                // Opposite bit exists, XOR is 1 at this position
                maxXOR = maxXOR | (1 << i);
                curr = nextNode[targetIdx];
            } else {
                // Opposite doesn't exist, forced to take same bit path
                curr = nextNode[curr * 2 + bit];
            }
        }
        return maxXOR;
    }

    // Insert all numbers
    for (let i = 0; i < n; i++) {
        insert(nums[i]);
    }

    // Find global max XOR
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, getMaxXOR(nums[i]));
    }

    return ans;
};
