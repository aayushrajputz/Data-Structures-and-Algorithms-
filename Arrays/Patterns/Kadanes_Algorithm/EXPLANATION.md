# Kadane's Algorithm: The "Life Philosophy" Pattern 🧠

## Problem
Find the **Subarray** (continuous part) with the **Maximum Sum**.
`[-2, 1, -3, 4, -1, 2, 1, -5, 4]`

## The "Suresh" Approach (Brute Force)
Check every single subarray possible.
- `[-2]`, `[-2, 1]`, `[-2, 1, -3]`, ...
- **Time Complexity:** O(N²) or O(N³).
- **Result:** Interview Fail.

## ✅ The Kadane's Approach (O(N))
### The Analogy: "Carry the Profit, Drop the Loss" 💰
Imagine you are walking and picking up money (positive) and debt (negative).

1.  **Iterate** through the array.
2.  **Add** the current number to your `currentSum`.
3.  **Check:** Did `currentSum` become Negative?
    - If **YES**: "Ye karza (debt) aage leke kyun jaana?"
    - **Action:** Reset `currentSum = 0`. (Start fresh logic).
4.  **Always Update:** Is `currentSum` > `maxSum`?
    - If **YES**: `maxSum = currentSum`.

### Dry Run
`[-2, 1, -3, 4, -1, 2, 1, -5, 4]`

1.  Sum=0, Max=-Infinity
2.  Add -2: Sum = -2. (Negative? Yes -> Reset Sum=0). Max stays -Infinity (or -2).
3.  Add 1: Sum = 1. Max = 1.
4.  Add -3: Sum = -2. (Negative? Yes -> Reset Sum=0). Max stays 1.
5.  Add 4: Sum = 4. Max = 4.
6.  Add -1: Sum = 3. Max = 4.
7.  Add 2: Sum = 5. Max = 5.
8.  Add 1: Sum = 6. Max = 6.
9.  Add -5: Sum = 1. Max = 6.
10. Add 4: Sum = 5. Max = 6.

**Result:** 6. (The subarray was `[4, -1, 2, 1]`)

### 📝 Code Structure
```javascript
let maxSum = -Infinity;
let currentSum = 0;

for (let num of nums) {
    currentSum += num;
    
    if (currentSum > maxSum) {
        maxSum = currentSum;
    }
    
    if (currentSum < 0) {
        currentSum = 0;
    }
}
return maxSum;
```
