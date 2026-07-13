function subarraysDivByK(nums, k) {
    let n = nums.length;
    let count = 0
    let map = new Map()
    map.set(0, 1)
    let sum = 0

    for (let i = 0; i < n; i++) {

        sum = sum + nums[i]
        if (map.has(sum - k)) {
            count = count + map.get(sum - k)

        }
        map.set(sum, (map.get(sum) || 0) + 1)
    }
    return count
}

console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)) 