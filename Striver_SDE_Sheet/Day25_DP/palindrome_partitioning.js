function partition(s) {
    let n = s.length;
    if (n === 0) return 0;

    let dp = new Array(n).fill(-1);

    function isPalindrome(start, end) {
        while (start < end) {
            if (s[start] !== s[end]) return false;
            start++;
            end--;
        }
        return true;
    }

    function solve(i) {
        if (i === n) return 0;
        if (dp[i] !== -1) return dp[i];

        let minCuts = Infinity;

        for (let j = i; j < n; j++) {
            if (isPalindrome(i, j)) {
                let cuts = 1 + solve(j + 1);
                minCuts = Math.min(minCuts, cuts);
            }
        }
        return dp[i] = minCuts;
    }

    return solve(0) - 1;
}

console.log(partition("aab")); // Expected: 1