/**
 * Problem: Fractional Knapsack
 * Pattern: Greedy (Sort by Value/Weight Ratio)
 * 
 * Strategy:
 * 1. Calculate value/weight ratio for each item.
 * 2. Sort items by ratio (Descending - Highest first).
 * 3. Greedily pick items:
 *    - If item fits completely, take it.
 *    - If item doesn't fit, take fraction.+ for picking = O(N log N)
 */

class Solution {
    // Function to get the maximum total value in the knapsack.
    fractionalKnapsack(W, arr, n) {
        // Step 1: Create items with ratio
        let items = [];
        for (let i = 0; i < n; i++) {
            items.push({
                value: arr[i].value,
                weight: arr[i].weight,
                ratio: arr[i].value / arr[i].weight
            });
        }

        // Step 2: Sort by ratio (Descending)
        items.sort((a, b) => b.ratio - a.ratio);

        // Step 3: Greedy Picking
        let totalValue = 0;
        let remainingCapacity = W;

        for (let i = 0; i < n; i++) {
            let item = items[i];

            if (remainingCapacity >= item.weight) {
                // Item pura fit ho jayega
                totalValue += item.value;
                remainingCapacity -= item.weight;
            } else {
                // Item ka fraction lena padega
                let fraction = remainingCapacity / item.weight;
                totalValue += item.value * fraction;
                remainingCapacity = 0; // Bag full
                break; // Ab aur kuch nahi le sakte
            }
        }

        return totalValue;
    }
}

// --- Driver Code ---
const sol = new Solution();

// Example: W = 50 (Bag capacity)
// Items: [{value, weight}, ...]
const items = [
    { value: 60, weight: 10 },  // Ratio: 6
    { value: 100, weight: 20 }, // Ratio: 5
    { value: 120, weight: 30 }  // Ratio: 4
];

const W = 50;
const n = items.length;

console.log("Max Value:", sol.fractionalKnapsack(W, items, n));
// Expected: 240
// Logic:
// Item 1 (60, 10) -> Pura le lo. Value = 60. Remaining = 40.
// Item 2 (100, 20) -> Pura le lo. Value = 100. Remaining = 20.
// Item 3 (120, 30) -> 20/30 fraction. Value = 120 * (20/30) = 80.
// Total = 60 + 100 + 80 = 240.
