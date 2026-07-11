function searchRoatated(nums, target) {
    let left = 0
    let right = nums.length - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)

        if (nums[mid] === target) {
            return mid
        }


        if (nums[left] <= nums[mid]) {
            if (target >= nums[left] && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            // Agar right part sorted hai, toh check karo kya target right range me aata hai?
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;  // rightside me dhoondho
            } else {
                right = mid - 1; // left side me dhoondho
            }
        }

    }
    return -1
}

let nums = [4, 5, 6, 7, 0, 1, 2]
let target = 0
searchRoatated(nums, target)
console.log(searchRoatated(nums, target))
console.log(searchRoatated([5, 1, 3], 3))