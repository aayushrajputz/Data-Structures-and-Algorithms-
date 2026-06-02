function longestStringChain(words) {
    let n = words.length;

    words.sort((a, b) => a.length - b.length)
    let dp = new Array(n).fill(1);
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (compare(words[i], words[j])) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }

    return Math.max(...dp);

    function compare(s1, s2) {
        if (s1.length !== s2.length + 1) return false;

        let first = 0
        let second = 0

        while (first < s1.length && second < s2.length) {
            if (s1[first] === s2[second]) {
                first++
                second++
            } else {
                first++
            }
        }
        return second === s2.length;
    }

}


const words = ["a", "b", "ba", "bca", "bda", "bdca"]
console.log(longestStringChain(words))