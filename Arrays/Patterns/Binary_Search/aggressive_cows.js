/**
 * PROBLEM: Aggressive Cows (Magnetic Force)
 * Pattern: Binary Search on Answer
 */

var canPlaceCows = function (position, k, minDist) {
    let count = 1; // Pehli cow pehle stall pe
    let lastPlaced = position[0];
    for (let i = 1; i < position.length; i++) {
        if (position[i] - lastPlaced >= minDist) {
            count++;
            lastPlaced = position[i];
        }
    }
    return count >= k;
};

function solve(position, k) {
    position.sort((a, b) => a - b);
    let low = 1;
    let high = position[position.length - 1] - position[0];
    let result = 0;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (canPlaceCows(position, k, mid)) {
            result = mid;
            low = mid + 1; // Try to maximize the distance
        } else {
            high = mid - 1; // Distance too large, decrease it
        }
    }
    return result;
}

// Test Cases
console.log("Max Min Distance (Expected 3):", solve([1, 2, 8, 4, 9], 3));
console.log("Max Min Distance (Expected 2):", solve([10, 1, 2, 7, 5], 3));
