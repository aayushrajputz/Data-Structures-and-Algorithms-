var superEggDrop = function (k, n) {
    // DP table initialized with -1
    let dp = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(-1));
    function solve(eggs, floors) {
        // Base Cases
        if (floors === 0 || floors === 1) return floors;
        if (eggs === 1) return floors; // 1 egg me floors jitne attempts lagenge
        if (dp[eggs][floors] !== -1) return dp[eggs][floors];
        let low = 1, high = floors;
        let ans = Infinity;
        // Binary Search instead of Linear Search
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let eggBreak = solve(eggs - 1, mid - 1);
            let eggNoBreak = solve(eggs, floors - mid);
            // Worst case attempts at floor 'mid'
            let temp = 1 + Math.max(eggBreak, eggNoBreak);
            ans = Math.min(ans, temp);
            // Move towards the intersection point of both functions
            if (eggBreak < eggNoBreak) {
                // eggNoBreak (decreasing function) is larger, so we need to increase mid
                low = mid + 1;
            } else {
                // eggBreak (increasing function) is larger, so we need to decrease mid
                high = mid - 1;
            }
        }
        return dp[eggs][floors] = ans;
    }
    return solve(k, n);
};