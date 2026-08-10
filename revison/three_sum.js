/**
 * Problem: 3Sum (LeetCode 15)
 * Pattern: Sorting + Two Pointers (Left & Right)
 */

function threeSum(nums) {
    let result = [];
    
    // Step 1: Array ko sort karo (a - b ascends)
    // Sorting se saare duplicates ek sath aa jaenge aur search space ordered ho jaega
    nums.sort((a, b) => a - b);
    
    let n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        // Optimization: Agar pehla number hi 0 se bada hai, toh sum kabhi 0 nahi ho sakta
        if (nums[i] > 0) break;

        // Duplicate Check for 'i':
        // Agar current element pichle element ke equal hai, toh skip karo taaki duplicate triplets na banein
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // Two Pointers setup
        let left = i + 1;
        let right = n - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                // Triplet mil gaya! Result me push karo
                result.push([nums[i], nums[left], nums[right]]);

                // Duplicate Check for 'left':
                // Jab tak aage wala element same hai, left ko aage badhao
                while (left < right && nums[left] === nums[left + 1]) {
                    left++;
                }

                // Duplicate Check for 'right':
                // Jab tak piche wala element same hai, right ko piche lao
                while (left < right && nums[right] === nums[right - 1]) {
                    right--;
                }

                // Match milne ke baad dono pointers ko ek-ek step aur move karo
                left++;
                right--;

            } else if (sum < 0) {
                // Sum chota hai (negative hai), toh positive side badhne ke liye left pointer ko aage badhao
                left++;
            } else {
                // Sum bada hai (positive hai), toh value kam karne ke liye right pointer ko piche lao
                right--;
            }
        }
    }

    return result;
}

// Test case runs
console.log("Test Case 1 [-1, 0, 1, 2, -1, -4]:");
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Expected Output: [ [-1, -1, 2], [-1, 0, 1] ]

console.log("\nTest Case 2 [0, 0, 0, 0]:");
console.log(threeSum([0, 0, 0, 0]));
// Expected Output: [ [0, 0, 0] ]
