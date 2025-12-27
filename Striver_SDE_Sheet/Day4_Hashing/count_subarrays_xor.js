/**
 * Count Subarrays with Given XOR K
 * Approach: Prefix XOR + Hash Map (O(N))
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function countSubarraysWithXorK(A, B) {
    let xr = 0;
    let mpp = new Map();
    // Base Case: XOR of an empty prefix is 0, occurring once.
    mpp.set(0, 1);
    let cnt = 0;

    for (let i = 0; i < A.length; i++) {
        // 1. Calculate prefix XOR till index i
        xr = xr ^ A[i];

        // 2. By formula x = xr ^ B
        let x = xr ^ B;

        // 3. Add frequency of x to count
        if (mpp.has(x)) {
            cnt += mpp.get(x);
        }

        // 4. Update frequency of current prefix XOR in map
        mpp.set(xr, (mpp.get(xr) || 0) + 1);
    }

    return cnt;
}

// Test Case 1: [4, 2, 2, 6, 4], B = 6
// Subarrays: [4, 2], [6], [2, 2, 6], [6, 4, 4] -> Total 4
console.log("Output for [4, 2, 2, 6, 4], target 6:", countSubarraysWithXorK([4, 2, 2, 6, 4], 6)); // Expected: 4

// Test Case 2: [5, 6, 7, 8, 9], B = 5
console.log("Output for [5, 6, 7, 8, 9], target 5:", countSubarraysWithXorK([5, 6, 7, 8, 9], 5)); // Expected: 2
