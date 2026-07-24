function singleNonDuplicate(nums) {
    let n = nums.length
    let low = 0
    let high = n - 1

    while (low < high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] == nums[mid + 1] && mid % 2 == 0) {
            low = mid + 1;
        }
        else if (nums[mid] == nums[mid - 1] && mid % 2 == 1) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return nums[low];
}
