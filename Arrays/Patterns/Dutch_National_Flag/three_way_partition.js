/**
 * Problem: Three Way Partitioning
 * Range: [a, b]
 * 
 * 1) Smaller than 'a' -> Left
 * 2) Between [a, b] -> Middle
 * 3) Greater than 'b' -> Right
 */

function threeWayPartition(nums, a, b) {
    let low = 0;                // Red logic (Values < a)
    let mid = 0;                // Scanner
    let high = nums.length - 1; // Blue logic (Values > b)

    while (mid <= high) {

        // Case 1: Value is smaller than range Start 'a'
        // Put in Low bucket
        if (nums[mid] < a) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        }
        // Case 2: Value is greater than range End 'b'
        // Put in High bucket
        else if (nums[mid] > b) {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
            // NO Mid++ here (Need to check swapped value)
        }
        // Case 3: Value is inside range [a, b]
        // Keep in Middle
        else {
            mid++;
        }
    }
}

let nums = [1, 14, 5, 20, 4, 2, 54, 20, 87, 98, 3, 1, 32];
console.log("Original:", nums);
threeWayPartition(nums, 10, 20); // Range 10 se 20 ke beech wale center mein
console.log("Partitioned:", nums);
