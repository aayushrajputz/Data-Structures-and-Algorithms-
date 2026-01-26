# N-Queens Visualization: The `isSafe` Logic

Imagine a 4x4 Chessboard.
We are placing Queens **Column by Column** (Left to Right).
Suppose we have already placed Queens in **Column 0** and **Column 1**.
Now we are trying to place a Queen in **Column 2** at **Row 2**. let's call this position **TARGET (2, 2)**.

## The Board State
( `Q` = Existing Queen, `?` = Target Position, `.` = Empty)

```
      Col 0   Col 1   Col 2   Col 3
Row 0   .       Q       .       .    <-- (Queen at 0,1)
Row 1   Q       .       .       .    <-- (Queen at 1,0)
Row 2   .       .       ?       .    <-- We want to place here (2,2)
Row 3   .       .       .       .
```

## Why Check Only Left?
We are moving from **Left -> Right**.
- Columns `0` and `1` are **FILLED**. We need to check them for attacks.
- Column `3` is **EMPTY** (Future). No Queen can attack from there yet.
- So, we only look **BACKWARDS (Left)**.

---

## 3 DANGER ZONES TO CHECK

### 1. Horizontal Left (⬅️)
Check if any Queen is sitting in the **Same Row (Row 2)** to the left.

```
      0   1   2   3
  0   .   Q   .   .
  1   Q   .   .   .
  2  [X] [X]  ?   .   <-- Check (2,1), then (2,0)
  3   .   .   .   .
```
**Logic**: Keep `row` same (2), decrease `col` (2 -> 1 -> 0).
**Result**: No Queen found. Safe ✅.

---

### 2. Upper Left Diagonal (↖️)
Check if any Queen is attacking from the **Top-Left**.

```
      0   1   2   3
  0   .  [X]  .   .   <-- (0, 0)
  1  [X]  .   .   .   <-- (1, 1) Checked
  2   .   .   ?   .   <-- Target (2, 2)
  3   .   .   .   .
```
**Logic**: Decrease `row` (2 -> 1 -> 0), Decrease `col` (2 -> 1 -> 0).
**Path**: `(1,1)` -> `(0,0)`.
**At (1,1)**: Empty (`.`).
**At (0,0)**: Empty (`.`). (Wait, in my example board above, (1,0) has Q. Diagonal from (2,2) hits (1,1) then (0,0)).
**Result**: No Queen found here in this specific example path (1,1 is empty, 0,0 is empty). Safe ✅.

*(Correction: In the example diagram at top, (1,0) has Q. Diagonal from 2,2 goes to 1,1 (empty) then 0,0 (empty). It misses the Q at 1,0 and 0,1! So this diagonal is SAFE.)*

---

### 3. Lower Left Diagonal (↙️)
Check if any Queen is attacking from the **Bottom-Left**.

```
      0   1   2   3
  0   .   Q   .   .
  1   Q   .   .   .
  2   .   .   ?   .   <-- Target (2, 2)
  3   .  [X]  .   .   <-- Check (3, 1)
```
**Logic**: Increase `row` (2 -> 3), Decrease `col` (2 -> 1).
**Path**: `(3,1)`.
**At (3,1)**: Empty (`.`).
**Result**: Safe ✅.

---

## Conclusion for Position (2,2)
Since all 3 directions (⬅️, ↖️, ↙️) are clear, **(2,2) is a SAFE Spot!**

We place `Q` there and move to **Column 3**.

```
      0   1   2   3
  0   .   Q   .   .
  1   Q   .   .   .
  2   .   .   Q   .   <-- Placed!
  3   .   .   .   .
```
