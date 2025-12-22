/**
 * LeetCode 1552: Magnetic Force Between Two Balls
 * Pattern: Binary Search on Answer (Maximize the Minimum) 🧲⚽
 * 
 * Problem: Arrange 'm' balls in 'position' buckets such that the MINIMUM distance
 * between any two balls is as LARGE (Maximum) as possible.
 */

/**
 * @param {number[]} position
 * @param {number} m
 * @return {number}
 */
var maxDistance = function (position, m) {
    // STEP 1: Sort positions. Without sorting, we can't measure distances correctly.
    position.sort((a, b) => a - b);

    /**
     * Helper Function: canWePlace(dist)
     * Goal: Check if we can place 'm' balls with at least 'dist' gap between them.
     */
    function canWePlace(dist) {
        let count = 1; // Always place the 1st ball at the 1st position
        let lastPos = position[0];

        for (let i = 1; i < position.length; i++) {
            // Check if the current basket is far enough from the last placed ball
            if (position[i] - lastPos >= dist) {
                count++; // Place new ball
                lastPos = position[i]; // Update last position
            }
            // Optimization: if we already placed 'm' balls, return true immediately
            if (count >= m) return true;
        }
        return false;
    }

    // STEP 2: Define Search Space for Binary Search
    // The answer (distance) must be between 1 and the total length of the range
    let low = 1;
    let high = position[position.length - 1] - position[0];
    let result = 0;

    // STEP 3: Binary Search on the "Distance"
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2); // Guess a distance 'mid'

        if (canWePlace(mid)) {
            // If we can place balls with 'mid' distance, it's a valid answer!
            result = mid;
            // BUT we want the MAXIMUM distance, so try a larger value
            low = mid + 1;
        } else {
            // If we can't place 'm' balls, the distance 'mid' is too large
            // We need to try smaller distances
            high = mid - 1;
        }
    }

    return result;
};

// --- DRY RUN EXAMPLE ---
// position = [1, 2, 3, 4, 7], m = 3
// 1. Sort: [1, 2, 3, 4, 7]
// 2. Binary Search between 1 and 6 (7-1)
// 3. Try mid = 3:
//    - Ball 1 at pos 1.
//    - Next ball needs >= 1+3=4. Pos 4 works! (Ball 2)
//    - Next ball needs >= 4+3=7. Pos 7 works! (Ball 3)
//    - Total 3 balls placed. Result = 3. 
// 4. Try mid = 4 (larger):
//    - Ball 1 at pos 1.
//    - Next needs >= 1+4=5. Pos 7 is next. (Ball 2)
//    - No more positions. Only 2 balls placed. (Fail)
// 5. Final max distance = 3.

console.log("Max Magnetic Force:", maxDistance([1, 2, 3, 4, 7], 3)); // Expected: 3
console.log("Max Magnetic Force:", maxDistance([5, 4, 3, 2, 1, 1000000000], 2)); // Expected: 999999999
