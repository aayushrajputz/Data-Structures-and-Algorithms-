/**
 * Problem: Online Stock Span
 * Level: Medium/Hard
 * Pattern: Monotonic Decreasing Stack (Next Greater Element to Left)
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function solveStockSpan(prices) {
    let n = prices.length;
    let spans = new Array(n);
    let stack = []; // Stores indices

    for (let i = 0; i < n; i++) {
        // Pop elements while stack is not empty and current price is >= price at stack top
        while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
            stack.pop();
        }

        // If stack is empty, it means current price is greater than all previous prices
        if (stack.length === 0) {
            spans[i] = i + 1;
        } else {
            // Span = Current Index - Index of Next Greater Element to the Left
            spans[i] = i - stack[stack.length - 1];
        }

        // Push current index to stack
        stack.push(i);
    }

    return spans;
}

// --- TEST CASE ---
const prices = [100, 80, 60, 70, 60, 75, 85];
console.log("Stock Prices: ", prices);
const result = solveStockSpan(prices);
console.log("Stock Spans:  ", result);

// Expected Output: [1, 1, 1, 2, 1, 4, 6]
