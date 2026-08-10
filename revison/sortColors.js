function sortColor(nums) {
    let low = 0
    let mid = 0
    let high = nums.length - 1

    while (mid <= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]]
            low++
            mid++
        }
        if (nums[mid] === 1) {
            mid++
        }
        else if (nums[mid] === 2) {
            [nums[mid], nums[high]] = [nums[high], nums[mid]]
            high--
        }
    }
    return nums

}
console.log(sortColor([2, 0, 2, 1, 1, 0])) 