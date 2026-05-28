var longestCommonSubsequence = function (text1, text2) {

    let n = text1.length;
    let m = text2.length;

    let dp = Array.from({ length: n + 1 }, () =>
        new Array(m + 1).fill(-1)
    );

    function solve(i, j) {

        if (i === 0 || j === 0) return 0;

        if (dp[i][j] !== -1) {
            return dp[i][j];
        }

        if (text1[i - 1] === text2[j - 1]) {

            return dp[i][j] =
                1 + solve(i - 1, j - 1);

        } else {

            return dp[i][j] = Math.max(
                solve(i - 1, j),
                solve(i, j - 1)
            );
        }
    }

    return solve(n, m);
};

console.log(longestCommonSubsequence("a", "b")); // Expected: 0
console.log(longestCommonSubsequence("abcde", "ace")); // Expected: 3

