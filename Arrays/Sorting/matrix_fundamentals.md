# Matrix Fundamentals: The 1D to 2D Bridge

If you know 1D Arrays, you already know 50% of Matrices.

## 1. Visualization
A 2D Matrix is just an "Array of Arrays".

```javascript
const matrix = [
  [10, 20, 30], // Row 0
  [40, 50, 60], // Row 1
  [70, 80, 90]  // Row 2
];
```

## 2. Accessing Elements
- `matrix[row]` gives you a **whole 1D array**.
  - `matrix[1]` -> `[40, 50, 60]`
- `matrix[row][col]` gives you a **single value**.
  - `matrix[1][2]` -> `60` (Row 1, Column 2)

## 3. The Nested Loop Pattern
To touch every element, we use two loops:
```javascript
for (let i = 0; i < matrix.length; i++) {       // i = Row index
    for (let j = 0; j < matrix[0].length; j++) { // j = Column index
        console.log(matrix[i][j]);
    }
}
```

## 4. Why this matters for "Set Matrix Zeroes"?
In that problem, we use the **first row** (`matrix[0][j]`) and **first column** (`matrix[i][0]`) as 1D arrays to store our information.

See you at 12:30 PM!
