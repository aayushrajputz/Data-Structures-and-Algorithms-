# 🏔️ Heap Visualizer (For Aayush)

## Array representation of Heap: `[Root, L1, R1, L2, R2]`

### 1. Initial State:
`[2, 5, 10, 15, 20]`
- Root (Min): 2

### 2. Action: Extract 2
- System says: "2 is gone. Now fill index 0."
- System takes the last element **20** and puts it at index 0.
- State: `[20, 5, 10, 15]`

### 3. Problem: Is 20 smaller than children?
- Children of index 0 (20) are 5 and 10.
- **NO.** 5 is the smallest child.

### 4. Fix: SWAP 20 with 5
- State: `[5, 20, 10, 15]`
- Now check 20's new children (index 3: 15).
- **Is 20 smaller than 15? NO.**

### 5. Fix: SWAP 20 with 15
- State: `[5, 15, 10, 20]`
- **BINGO!** Rule restored. Smallest is at the top again. 🏆
