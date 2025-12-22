/**
 * LEETCODE 875: Koko Eating Bananas
 * 
 * Goal: Find the minimum integer k such that Koko can eat all bananas within h hours.
 * 
 * LOGIC:
 * 1. Range of speed (k): min = 1, max = max(piles)
 * 2. Binary Search on the range of k.
 * 3. For each 'mid' (speed):
 *      - Calculate total hours needed: Sum of Math.ceil(pile / mid)
 *      - If totalHours <= h: 
 *          - This speed works! Save it and try even smaller speed (high = mid - 1)
 *      - Else: 
 *          - Speed is too slow, increase it (low = mid + 1)
 */

function minEatingSpeed(piles, h) {
    let low = 1;
    let high = Math.max(...piles);
    let ans = high;

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2);

        let hours = 0;
        for (let i = 0; i < piles.length; i++) {
            hours += Math.ceil(piles[i] / mid);
        }
        if (hours <= h) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

// Test Cases
console.log("Min Speed (Expected 4):", minEatingSpeed([3, 6, 7, 11], 8));
console.log("Min Speed (Expected 30):", minEatingSpeed([30, 11, 23, 4, 20], 5));
console.log("Min Speed (Expected 23):", minEatingSpeed([30, 11, 23, 4, 20], 6));
