/**
 * Problem: Minimum Coins (Greedy Coin Change)
 * Pattern: Greedy (Start from largest denomination)
 * 
 * Strategy:
 * 1. Start from the largest coin.
 * 2. Use as many of that coin as possible.
 * 3. Move to next smaller coin.
 * 4. Repeat until amount becomes 0.
 * 
 * Note: This greedy approach works ONLY for standard coin systems
 * (like Indian currency: 1, 2, 5, 10, 20, 50, 100, 500, 1000)
 * For arbitrary coin systems, DP is required.
 * 
 * Complexity: O(N) where N is number of denominations (usually constant)
 */

class Solution {
    minCoins(coins, N, amount) {
        // Sort coins in descending order (largest first)
        coins.sort((a, b) => b - a);

        let count = 0;
        let remaining = amount;

        for (let i = 0; i < N; i++) {
            if (remaining >= coins[i]) {
                // How many of this coin can we use?
                let numCoins = Math.floor(remaining / coins[i]);
                count += numCoins;
                remaining -= numCoins * coins[i];
            }

            // If amount is fully covered
            if (remaining === 0) break;
        }

        // If we couldn't make exact change
        if (remaining > 0) return -1;

        return count;
    }
}

// --- Driver Code ---
const sol = new Solution();

// Indian Currency System
const coins = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
const N = coins.length;

// Test Case 1: Amount = 93
console.log("Amount 93:", sol.minCoins(coins, N, 93));
// Expected: 5 coins (50 + 20 + 20 + 2 + 1)

// Test Case 2: Amount = 121
console.log("Amount 121:", sol.minCoins(coins, N, 121));
// Expected: 3 coins (100 + 20 + 1)

// Test Case 3: Amount = 0
console.log("Amount 0:", sol.minCoins(coins, N, 0));
// Expected: 0 coins
