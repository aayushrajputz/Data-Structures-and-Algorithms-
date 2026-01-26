# Sudoku Logic: The "One Cell" Story 🧩

Forget the 81 cells. Let's focus on **JUST ONE CELL**.

Imagine you are at **Row 0, Col 2**. It is empty (`.`).
You have a bag of numbers: `[1, 2, 3, 4, 5, 6, 7, 8, 9]`.

You pick **1**.
1. **Ask Row 0**: "Hey, is there a '1' already here?" -> No.
2. **Ask Col 2**: "Hey, is there a '1' already here?" -> No.
3. **Ask Box 0**: "Hey, in this 3x3 box, is there a '1'?" -> No.

**Verdict**: It's SAFE! ✅
You put `1` in the cell.

Now you ask the next cell: "Hey, your turn to solve."
- If the next cell says "I solved it!", then YOU are happy. Return `true`.
- If the next cell says "I tried everything but failed", then YOU say "Oops, my '1' was wrong."

**Backtrack**:
- You erase `1`. Make it `.` again.
- You pick **2**.
- Repeat.

---

### The Code Translation (Logic Mapping)

```javascript
/* 1. Dhoondo (Find Empty Cell) */
if (board[row][col] == '.') {

    /* 2. Try Numbers (1 to 9) */
    for (char c = '1'; c <= '9'; c++) {
        
        /* 3. Pucho (IsValid?) - Row, Col, Box check */
        if (isValid(board, row, col, c)) {
            
            /* 4. Likho (Place Number) */
            board[row][col] = c;

            /* 5. Aage badho (Recurse to solve rest) */
            if (solve(board) == true)
                return true; // Success!

            /* 6. Mitao (Backtrack - Agar aage fail hua) */
            board[row][col] = '.';
        }
    }
    /* 7. Agar 1-9 kuch nahi chala? FAIL. Return false to trigger backtrack */
    return false;
}
```

Is this "Hard"? 
It's just **Try -> Check -> Move -> Undo**.
If you can loop 1-9, you can solve Sudoku.
