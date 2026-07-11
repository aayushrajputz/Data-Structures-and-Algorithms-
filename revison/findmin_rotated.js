function findmin(nums) {
    let low = 0
    let high = nums.length - 1
    let ans = Infinity

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        ans = Math.min(ans, nums[mid])

        if (nums[low] <= nums[mid]) {
            low = mid + 1
        } else {
            high = mid - 1
            break;
        }




        if (nums[low] <= nums[mid]) {
            ans = Math.min(ans, nums[low]);
            low = mid + 1;

        }
        else if (nums[mid] <= nums[high]) {
            ans = Math.min(ans, nums[mid]);
            high = mid - 1
        }
    }
    return ans

}
console.log(findmin([4, 5, 6, 7, 0, 1, 2]))  