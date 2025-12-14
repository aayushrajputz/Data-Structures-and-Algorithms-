# Pattern: Three Pointers (Dutch National Flag) 🇳🇱

## The Problem
We have an array with `0`s, `1`s, and `2`s randomly mixed.
`Input: [2, 0, 2, 1, 1, 0]`
We want to sort them: `0s first`, `1s middle`, `2s last`.
`Output: [0, 0, 1, 1, 2, 2]`

## ❌ The "Suresh" Approach (Bad)
Sort function use kar lo: `nums.sort()`.
- **Time Complexity:** O(N log N).
- **Why Bad:** Interviewer will ask you to leave. Sorting is O(N log N), but this problem can be done in O(N).

## ✅ The "Traffic Police" Approach (Optimal - O(N))
Imagine you are standing on a road segregating cars.
You define 3 regions:
1.  **Left Side:** Reserved for Red Cars (`0`).
2.  **Right Side:** Reserved for Blue Cars (`2`).
3.  **Middle:** Everything else (`1`).

### The 3 Pointers
1.  **`low`**: Tracks the boundary of `0`s. (Start of Array).
2.  **`high`**: Tracks the boundary of `2`s. (End of Array).
3.  **`mid`**: The **Scanner**. This moves through the array inspecting numbers.

---

### 🚦 The Rules (The Algorithm)
We run a loop while `mid <= high`.
The `mid` pointer looks at the value `arr[mid]`:

#### case 0: "Oh, it's a 0!" (Belongs to Left)
- Swap `arr[low]` and `arr[mid]`.
- Move `low` forward (`low++`).
- Move `mid` forward (`mid++`).
*(Why mid++? Because we know the swapped value from low was definitely processed/safe).*

#### case 1: "Oh, it's a 1!" (Belongs to Middle)
- It is already in the right place relative to 0s.
- Just move `mid` forward (`mid++`).

#### case 2: "Oh, it's a 2!" (Belongs to Right)
- Swap `arr[mid]` and `arr[high]`.
- Move `high` backward (`high--`).
- **CRITICAL:** Do **NOT** move `mid`.
*(Why? Because the value we swapped from `high` could be a `0`. We need to check `arr[mid]` again in the next iteration).*

---

### 🧠 Dry Run Visualization
`arr = [2, 0, 1]`

**Start:**
`low=0`, `mid=0`, `high=2`

1.  **Check `arr[mid]` (which is `arr[0]` = 2):**
    - Rule: It's a `2`. Swap with `high`.
    - Swap `arr[0]` (2) with `arr[2]` (1).
    - Array becomes: `[1, 0, 2]`
    - `high` becomes `1`.
    - `mid` stays `0`.

2.  **Check `arr[mid]` (which is `arr[0]` = 1):**
    - Rule: It's a `1`. Do nothing.
    - `mid` becomes `1`.
    - Array: `[1, 0, 2]`

3.  **Check `arr[mid]` (which is `arr[1]` = 0):**
    - Rule: It's a `0`. Swap with `low`.
    - Swap `arr[mid]` (0) with `arr[low]` (1).
    - Array becomes: `[0, 1, 2]`
    - `low` becomes `1`.
    - `mid` becomes `2`.

**End:** `mid (2) > high (1)`. loop breaks.
**Result:** `[0, 1, 2]`. Sorted!

---

### 📝 Summary
- **0** -> Swap with Low, Low++, Mid++.
- **1** -> Mid++.
- **2** -> Swap with High, High--.
