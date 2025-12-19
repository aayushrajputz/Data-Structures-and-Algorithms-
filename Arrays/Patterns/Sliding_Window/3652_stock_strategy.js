/**
 * 3652. Best Time to Buy and Sell Stock using Strategy
 * 
 * Pattern: Fixed Window Partitioning
 * 
 * Problem:
 * You are given an array 'prices' and a window size 'k'.
 * The strategy is:
 * 1. Divide the window 'k' into two halves: first k/2 elements and last k/2 elements.
 * 2. Find the MINIMUM price in the first half (Buy).
 * 3. Find the MAXIMUM price in the second half (Sell).
 * 4. Your profit for THAT window is (Max_Sell - Min_Buy).
 * 5. Return the MAXIMUM profit across all possible windows of size k in the array.
 * 
 * Note: If k is 4, halves are 2 each. If k is odd, k/2 is floor.
 */

function maxProfitWithStrategy(prices, k) {
    const n = prices.length;
    let maxProfit = 0;
    let half = Math.floor(k / 2);

    for (let i = 0; i <= n - k; i++) {
        let leftSide = prices.slice(i, i + half);
        let rightSide = prices.slice(i + half, i + k)

        let minBuy = Math.min(...leftSide);
        let maxSell = Math.max(...rightSide);

        let profit = maxSell - minBuy;
        maxProfit = Math.max(maxProfit, profit);
    }

    return maxProfit;
}

// Test Case:
const prices = [10, 5, 8, 15, 2, 7, 12, 11], k = 4;
console.log("Max Profit:", maxProfitWithStrategy(prices, k));
// Expected Output: 10
