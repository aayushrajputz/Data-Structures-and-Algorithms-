function longestConsecutive(nums) {
    let numSet = new Set(nums)
    let maxCount = 0

    for (let num of nums) {
        if (!numSet.has(num - 1)) {
            let count = 1
            let currNum = num

            while (numSet.has(currNum + 1)) {
                currNum += 1
                count += 1
            }
            maxCount = Math.max(maxCount, count)
        }
    }
    return maxCount
}


console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));