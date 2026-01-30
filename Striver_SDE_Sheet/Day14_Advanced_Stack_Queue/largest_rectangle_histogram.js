/**
 * Problem: Largest Rectangle in Histogram (LeetCode 84)
 * Level: HARD
 * Logic: Use Monotonic Stack to find Next Smaller Left (NSL) and Next Smaller Right (NSR)
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function largestRectangleArea(heights) {
    const n = heights.length;
    let nsl = new Array(n); // Next Smaller Left (Indices)
    let nsr = new Array(n); // Next Smaller Right (Indices)
    let stack = [];

    // --- 1. Find NSL (Next Smaller Left Indices) ---
    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        if (stack.length === 0) nsl[i] = -1; // Boundary
        else nsl[i] = stack[stack.length - 1];
        stack.push(i);
    }

    // Clear stack for reuse
    stack = [];

    // --- 2. Find NSR (Next Smaller Right Indices) ---
    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
            stack.pop();
        }
        if (stack.length === 0) nsr[i] = n; // Boundary (n is outside the array)
        else nsr[i] = stack[stack.length - 1];
        stack.push(i);
    }

    // --- 3. Calculate Maximum Area ---
    let maxArea = 0;
    for (let i = 0; i < n; i++) {
        let width = nsr[i] - nsl[i] - 1;
        let area = heights[i] * width;
        maxArea = Math.max(maxArea, area);
    }

    return maxArea;
}

// --- TEST CASE ---
const heights = [2, 1, 5, 6, 2, 3];
console.log("Heights:", heights);
console.log("Max Rectangle Area:", largestRectangleArea(heights)); // Expected: 10
