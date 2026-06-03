function partition(s) {
    let n = s.length
    if (n === 0) return 0
    let dp = new Array(n).fill(-1)
    function isPalindrome(start, end) {
        while (start < end) {
            if (s[start] !== s[end]) return false;
            start++
            end--
        }
        return true;
    }
    function solve(start) {
        if (start === n) return 0;
        if (dp[start] !== -1) return dp[start];
        let minCuts = Infinity;
        for (let end = start; end < n; end++) {
            if (isPalindrome(start, end)) {
                let cuts = 1 + solve(end + 1);
                minCuts = Math.min(minCuts, cuts);
            }
        }
        return dp[start] = minCuts;
    }

    return solve(0) - 1;


}

console.log(partition("aab")); // 1
console.log(partition("a")); // 0
console.log(partition("ab")); // 1