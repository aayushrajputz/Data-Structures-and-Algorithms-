function largestDivisibleSub(nums) {
    let n = nums.length;
    if (n === 0) return []

    nums.sort((a, b) => a - b)
    let dp = Array(n).fill(1)
    let hash = Array.from({ length: n }, (_, i) => i)

    let maxLen = 1
    let lastLen = 0

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0 && 1 + dp[j] > dp[i]) {
                dp[i] = 1 + dp[j]
                hash[i] = j
            }
        }
        if (dp[i] > maxLen) {
            maxLen = dp[i]
            lastLen = i
        }
    }
    let subset = []
    subset.push(nums[lastLen])

    while (hash[lastLen] !== lastLen) {
        lastLen = hash[lastLen]
        subset.push(nums[lastLen])
    }
    return subset.reverse()

}

console.log(largestDivisibleSub([1, 2, 4, 8])); // [ 1, 2, 4, 8 ]
console.log(largestDivisibleSub([3, 4, 16, 8])); // [ 4, 16, 8 ]