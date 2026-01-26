# 🗳️ Matrix Median: The Voting Analogy

### 1. The Matrix (N=3, M=3, Total=9)
```
[ 1, 3, 5 ]
[ 2, 6, 9 ]
[ 3, 6, 9 ]
```
**Goal**: Find the number that has at least **5 elements** (9/2 + 1) less than or equal to it.

---

### 2. The Process (Binary Search on Answer)

| Guess (Mid) | Row 1 Count (<= Mid) | Row 2 Count (<= Mid) | Row 3 Count (<= Mid) | Total Count | Decision |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Guess 4** | [1, 3] -> **2** | [2] -> **1** | [3] -> **1** | **4** | Too Small (Need 5) |
| **Guess 7** | [1, 3, 5] -> **3** | [2, 6] -> **2** | [3, 6] -> **2** | **7** | Enough! (But try smaller) |
| **Guess 5** | [1, 3, 5] -> **3** | [2] -> **1** | [3] -> **1** | **5** | **PERFECT!** 🎯 |

---

### 3. The Two Binary Searches
1. **Outer BS (The Guessing Game)**:
   - `low = 1`, `high = 1e9`
   - It picks a `mid` (e.g., 4) and asks "Are there 5 elements <= 4?"
2. **Inner BS (The Counting Game)**:
   - For each row, it find the index of the first element `> mid`.
   - In row `[1, 3, 5]`, find first element `> 4`. It's `5` (Index 2). So count = 2.

---

### 🔥 Why Use This?
Why not just flatten the matrix and sort it?
- Flatten & Sort: **O(N*M * log(N*M))**
- Binary Search: **O(32 * N * log(M))**  -> Much FASTER!
