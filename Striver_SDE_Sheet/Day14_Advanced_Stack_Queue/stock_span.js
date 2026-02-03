/**
 * Problem: Online Stock Span
 * Pattern: Monotonic Stack (Nearest Greater Element to the Left)
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function calculateStockSpan(prices) {
    let n = prices.length;
    let spans = new Array(n);
    let stack = []; // Stores indices

    for (let i = 0; i < n; i++) {
        // Pop elements while stack is not empty and current price is >= price at stack top
        while (stack.length > 0 && prices[stack[stack.length - 1]] <= prices[i]) {
            stack.pop();
        }

        // If stack is empty, current price is the greatest so far
        if (stack.length === 0) {
            spans[i] = i + 1;
        } else {
            // Span = Current Index - Index of Nearest Greater Element to the Left
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
const result = calculateStockSpan(prices);
console.log("Stock Spans:  ", result);

// Logic Check:
// For 100: Stack empty -> Span = 0 + 1 = 1
// For 75: Stack top will be 80 (Index 1). Span = 5 - 1 = 4. Correct!
