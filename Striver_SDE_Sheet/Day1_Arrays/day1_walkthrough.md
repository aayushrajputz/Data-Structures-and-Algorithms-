# Day 1: Striver SDE Sheet - Progress Report

## Problems Mastered:

### 1. Set Matrix Zeroes (LeetCode 73)
- **Concept:** In-place modification of a 2D Matrix.
- **Elite Logic:** Used the first row and first column of the matrix as trackers to achieve $O(1)$ space complexity.
- **Key Insight:** Used a separate variable `col0` for the first column to avoid collision with the first row at `matrix[0][0]`.
- **Trap Avoided:** Used a **reverse traversal** (bottom-up) to apply markings so that trackers aren't overwritten prematurely.

### 2. Pascal's Triangle (LeetCode 118)
- **Concept:** Generating a triangle where each number is the sum of the two numbers above it.
- **Standard Logic:** `triangle[i][j] = triangle[i-1][j-1] + triangle[i-1][j]`.
- **Elite Logic (Specific element):** Used the combination formula $(n-1)C(r-1)$ for $O(1)$ access.
- **Elite Logic (Specific row):** Used the formula `current = previous * (row - col) / col` to generate a specific row in $O(N)$ time.

## Next Steps for Tomorrow (Day 2 of Sheet):
- [ ] Next Permutation (The "Peak & Swap" logic)
- [ ] Kadane's Algorithm
- [ ] Sort Colors (DNF)
- [ ] Best Time to Buy and Sell Stock
