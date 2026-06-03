function minCostToCutStick(stickLen, cuts) {
    // 1. Add boundaries and sort
    cuts.push(0);
    cuts.push(stickLen);
    cuts.sort((a, b) => a - b);

    let m = cuts.length;
    // DP array size m x m (since i goes up to m-2 and j goes up to m-2)
    let dp = Array.from({ length: m }, () => new Array(m).fill(-1));

    function solve(i, j) {
        if (i > j) return 0;
        if (dp[i][j] !== -1) return dp[i][j];

        let ans = Infinity;

        for (let k = i; k <= j; k++) {
            let tempCost = solve(i, k - 1) + solve(k + 1, j) + (cuts[j + 1] - cuts[i - 1]);
            ans = Math.min(ans, tempCost);
        }

        return dp[i][j] = ans;
    }

    return solve(1, m - 2);
}

console.log(minCostToCutStick(7, [1, 3, 4, 5])); // Expected: 16