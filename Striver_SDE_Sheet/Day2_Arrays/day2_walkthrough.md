 # Day 2: Striver SDE Sheet - Progress Report 

## Problems Mastered:

### 1. Kadane's Algorithm
- **Concept:** Maximum Subarray Sum.
- **Elite Logic:** Reset `currentSum` to 0 whenever it becomes negative.
- **Advanced Tip:** Tracked `start` and `end` indices using additional pointers.

### 2. Sort Colors (Dutch National Flag)
- **Concept:** Sorting an array of 0s, 1s, and 2s in O(N) time and O(1) space.
- **Strategy:** 3 pointers (`low`, `mid`, `high`).
- **Key Insight:** `mid` is not incremented when swapping with `high` because the incoming element is un-scanned.

### 3. Repeat and Missing Number
- **Concept:** Using math to find anomalies in 1 to N sequence.
- **Elite Logic:** Equations involving Sum ($X-Y$) and Sum of Squares ($X^2-Y^2$).
- **Precision Hack:** Used `BigInt` (optional but recommended) to handle potential overflow in large arrays.

### 4. Rotate Image (90 Degrees)
- **Concept:** In-place matrix rotation.
- **Two-Step Magic:** 1. Transpose the matrix, 2. Reverse each row.

### 5. Merge Overlapping Intervals
- **Concept:** Sorting + Scanning for intervals that collide.
- **Logic:** `if (current[0] <= lastMerged[1]) merge()`.

### 6. Merge Sorted Array
- **Concept:** Merging two sorted arrays without extra space.
- **Tactical Insight:** Fill from the **END** to avoid overwriting original data.

## Overall Status: 12/190 Problems Done. 
Next Session Focus: Day 3 (Arrays Part 3 - Search 2D, Pow(x,n), Majority Elements).
