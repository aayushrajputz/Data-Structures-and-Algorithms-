var findLongestChain = function (pairs) {
    let n = pairs.length;
    if (n === 0) return 0;

    // 1. Sort based on first elements
    pairs.sort((a, b) => a[0] - b[0]);

    // 2. Standard LIS DP Array
    let dp = new Array(n).fill(1);

    // 3. LIS Nested loops
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (pairs[i][0] > pairs[j][1]) {
                dp[i] = Math.max(dp[i], 1 + dp[j]);
            }
        }
    }

    return Math.max(...dp);
};
