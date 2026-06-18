// High-Performance Flat Array Trie Solution (O(N) Time, O(N) Space)
// Completely avoids object allocation overhead to prevent TLE in JS
var findMaximumXOR = function (nums) {
    const n = nums.length;
    // Max nodes possible in Trie = N numbers * 31 bits + 2 extra nodes
    const maxNodes = n * 31 + 2;
    
    // Flat 1D array to represent 2D tree:
    // For any nodeId:
    // Left child (0-bit path) is stored at: nodeId * 2
    // Right child (1-bit path) is stored at: nodeId * 2 + 1
    const nextNode = new Int32Array(maxNodes * 2);
    let nodeCount = 1; // Root node ID is 0, next new node will get ID 1

    // 1. Fast Insert using Array indices
    function insert(num) {
        let curr = 0; // Start at root node (ID 0)
        for (let i = 30; i >= 0; i--) {
            let bit = (num >> i) & 1; // Extract the i-th bit
            let idx = curr * 2 + bit; // Compute the index in nextNode array
            
            // If the child node doesn't exist, create it by assigning a new node ID
            if (nextNode[idx] === 0) {
                nextNode[idx] = nodeCount++;
            }
            // Move to the child node
            curr = nextNode[idx];
        }
    }

    // 2. Fast Search for Max XOR using Greedy Choice
    function getMaxXOR(num) {
        let curr = 0; // Start at root node (ID 0)
        let maxXOR = 0;
        for (let i = 30; i >= 0; i--) {
            let bit = (num >> i) & 1; // Extract the i-th bit
            let targetBit = 1 - bit;  // The opposite bit is our greedy choice
            let targetIdx = curr * 2 + targetBit; // Index of the opposite bit child

            // If the opposite bit path exists in the Trie
            if (nextNode[targetIdx] !== 0) {
                maxXOR = maxXOR | (1 << i); // We get a 1 at this bit position in XOR
                curr = nextNode[targetIdx];  // Move down the opposite path
            } else {
                // Otherwise, we are forced to take the same bit path (gives 0 in XOR)
                curr = nextNode[curr * 2 + bit];
            }
        }
        return maxXOR;
    }

    // Step 1: Insert all numbers in the Trie
    for (let i = 0; i < n; i++) {
        insert(nums[i]);
    }

    // Step 2: Find the global maximum XOR
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans = Math.max(ans, getMaxXOR(nums[i]));
    }

    return ans;
};

// Driver code to test the implementation
const testNums = [3, 10, 5, 25, 2, 8];
console.log("Max XOR Result:", findMaximumXOR(testNums)); // Expected: 28 (5 ^ 25)
