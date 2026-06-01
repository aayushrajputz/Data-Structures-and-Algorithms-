function profitableSchemes(n, minProfit, group, profit) {
    let len = group.length
    let dp = Array.from({ length: len }, () =>
        Array.from({ length: n + 1 }, () =>
            new Array(minProfit + 1).fill(-1)));

    function solve(ind, membersLeft, profitSoFar) {
        const MOD = 1e9 + 7;
        if (ind === len) return profitSoFar >= minProfit ? 1 : 0
        if (membersLeft < 0) return 0
        profitSoFar = Math.min(profitSoFar, minProfit);

        if (dp[ind][membersLeft][profitSoFar] !== -1) return dp[ind][membersLeft][profitSoFar]


        let notPick = solve(ind + 1, membersLeft, profitSoFar)
        let pick = 0;
        if (group[ind] <= membersLeft) {
            pick = solve(ind + 1, membersLeft - group[ind], Math.min(profitSoFar + profit[ind], minProfit))
            return dp[ind][membersLeft][profitSoFar] = (notPick + pick) % MOD

        }
        return dp[ind][membersLeft][profitSoFar] = notPick % MOD

    }
    return solve(0, n, 0)

}

console.log(profitableSchemes(5, 3, [2, 2], [2, 3]))