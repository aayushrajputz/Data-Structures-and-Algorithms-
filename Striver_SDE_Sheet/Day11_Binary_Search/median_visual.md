# ⚖️ Median of Two Sorted Arrays: The Visual Logic

Bhai, is question ko "Binary Search" ke bajaye **"Cake Cutting"** ki tarah socho.

### 📍 Problem:
Do sorted cakes (arrays) hain. Humein dono ko beech mein se aise kaatna hai ki:
- Left side ke saare pieces ka weight, Right side ke saare pieces se kam ya barabar ho.
- Left half aur Right half mein barabar total pieces hon.

### 📐 The Geometry:
Array 1: `[1, 3 | 4, 7, 10]`  (Cut at index 2)
Array 2: `[2, 5, 8 | 9, 11]` (Cut at index 3)

**Condition for Success:**
1. `Left1 <= Right2` (3 <= 9) ✅
2. `Left2 <= Right1` (8 <= 4) ❌ (Fail! Cut galat hai, shift karo!)

### 🛠️ Binary Search Role:
Hum sirf **chote array** pe binary search karte hain (`low` to `high`).
- Agar `Left1 > Right2`: Humne cut bahut aage (right) laga diya. Cut ko **peeche (left)** lao (`high = cut1 - 1`).
- Agar `Left2 > Right1`: Humne cut bahut peeche (left) laga diya. Cut ko **aage (right)** le jao (`low = cut1 + 1`).

### 🎯 Median Calculation:
- **Total Even**: `(max(L1, L2) + min(R1, R2)) / 2`
- **Total Odd**: `max(L1, L2)` (Kyuki left element ek extra hota hai).

---

### 🧠 Interviewer Question:
*"Why Binary Search on the smaller array?"*
**Answer**: Efficiency! $O(\log(\min(n, m)))$. Agar hum badhe array pe karenge toh steps zyada lagenge. 🚀
