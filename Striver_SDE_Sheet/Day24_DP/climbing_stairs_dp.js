
// recursive

function climStairsDP(n) {


    if (n <= 1) return 1;
    if (memo[n] != -1) return memo;

    memo[n] = climStairsDP(n - 1) + climStairsDP(n - 2);
    return memo[n];
}
let memo = new Array(n + 1).fill(-1)

console.log(climStairsDP(10));
// tabulation
function climbStairTabulation(n) {
    let dp = new Array(n + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];


    }
    return dp[n]
}

console.log(climbStairTabulation(10));
//space optimization
function climbStairsOptmized(n) {
    let prev1 = 1;
    let prev2 = 1;
    for (let i = 2; i <= n; i++) {
        let curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr

    }
    return prev1
}

console.log(climbStairsOptmized(10));