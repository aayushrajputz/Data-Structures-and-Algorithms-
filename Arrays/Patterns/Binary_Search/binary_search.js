/**
 * Problem: Binary Search on Sorted Array
 * Target: Find index of target in O(log n)
 * 
 * Logic:
 * 1. Define low = 0, high = length - 1
 * 2. Calculate mid
 * 3. if nums[mid] === target -> found!
 * 4. if nums[mid] < target -> discard left (low = mid + 1)
 * 5. if nums[mid] > target -> discard right (high = mid - 1)
 */

function binarySearch(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        // mid nikalne ka best tarika (overflow safe)
        let mid = Math.floor(low + (high - low) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return -1; // Kuch nahi mila
}

// Test Cases
const nums = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
console.log("Searching 23:", binarySearch(nums, 23)); // Expected: 5
console.log("Searching 100:", binarySearch(nums, 100)); // Expected: -1
console.log("Searching 2:", binarySearch(nums, 2));   // Expected: 0
