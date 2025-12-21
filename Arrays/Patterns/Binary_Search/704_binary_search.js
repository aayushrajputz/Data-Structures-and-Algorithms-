/**
 * Problem: Binary Search (LeetCode 704)
 * Difficulty: Easy (But the Mother of all Search Patterns)
 * 
 * Logic: "Divide and Conquer"
 * 1. Hamesha Sorted Array hona chahiye.
 * 2. Beech ka element (Mid) check karo.
 * 3. Agar Target bada hai -> Toh left half fek do (low = mid + 1).
 * 4. Agar Target chota hai -> Toh right half fek do (high = mid - 1).
 * 
 * Time Complexity: O(log N) -> Bahut Tez!
 * Space Complexity: O(1)
 */

function search(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    // Standard Template Start (Ratta Maar lo is loop ko)
    while (low <= high) {
        // mid nikalne ka safe tarika (Overflow proof)
        // Math.floor is important in JS
        let mid = Math.floor(low + (high - low) / 2);

        if (nums[mid] === target) {
            return mid; // Mil gaya! 🎉
        }
        else if (nums[mid] < target) {
            // Target bada hai, right side jao
            low = mid + 1;
        }
        else {
            // Target chota hai, left side jao
            high = mid - 1;
        }
    }
    // Standard Template End

    return -1; // Nahi mila 😢
};

// Test Cases
console.log("Test 1 (Target 9):", search([-1, 0, 3, 5, 9, 12], 9)); // Expected: 4
console.log("Test 2 (Target 2):", search([-1, 0, 3, 5, 9, 12], 2)); // Expected: -1
console.log("Test 3 (Single Element):", search([5], 5)); // Expected: 0
