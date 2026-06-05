function coinOnTheTable(m, k, board) {
    let n = board.length;
    let col = board[0].length; // board[0].length and col are same as 'm'

    // 3D DP Array: size n x col x (k + 1) filled with -1
    let dp = Array.from({ length: n }, () =>
        Array.from({ length: col }, () => new Array(k + 1).fill(-1))
    );

    function solve(i, j, t) {
        // 1. Base Case: Out of Bounds
        if (i < 0 || i >= n || j < 0 || j >= col) return Infinity;

        // 2. Base Case: Reached Destination '*'
        if (board[i][j] === '*') return 0;

        // 3. Base Case: Step Limit Exceeded
        if (t === k) return Infinity;

        // 4. Memoization Check
        if (dp[i][j][t] !== -1) return dp[i][j][t];

        let minOps = Infinity;

        // Up (U) direction try karo
        let costU = board[i][j] === 'U' ? 0 : 1;
        minOps = Math.min(minOps, costU + solve(i - 1, j, t + 1));

        // Down (D) direction try karo
        let costD = board[i][j] === 'D' ? 0 : 1;
        minOps = Math.min(minOps, costD + solve(i + 1, j, t + 1));

        // Left (L) direction try karo
        let costL = board[i][j] === 'L' ? 0 : 1;
        minOps = Math.min(minOps, costL + solve(i, j - 1, t + 1));

        // Right (R) direction try karo
        let costR = board[i][j] === 'R' ? 0 : 1;
        minOps = Math.min(minOps, costR + solve(i, j + 1, t + 1));

        return dp[i][j][t] = minOps;
    }

    let result = solve(0, 0, 0);
    return result === Infinity ? -1 : result;
}


// Test Case
const board = [
    "RD",
    "*L"
];
console.log(coinOnTheTable(2, 3, board)); // Expected Output: 0
