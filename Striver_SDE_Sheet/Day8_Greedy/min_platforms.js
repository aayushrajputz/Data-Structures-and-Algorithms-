
/**
 * Problem: Minimum Platforms Required
 * Logic: Chronological Sorting + Two Pointers
 * 
 * Strategy:
 * 1. Sort both Arrival (arr) and Departure (dep) arrays independently.
 * 2. Use two pointers 'i' (for arr) and 'j' (for dep).
 * 3. Iterate through time:
 *    - If (arr[i] <= dep[j]): A train arrives before the previous one leaves.
 *      We need a new platform. (plat++, i++)
 *    - If (arr[i] > dep[j]): A train leaves before the next one arrives.
 *      A platform becomes free. (plat--, j++)
 * 4. Keep track of the maximum value of 'plat'.
 * 
 * Complexity: O(N log N) for sorting. O(2N) for iteration. Space O(1).
 */

class Solution {
    findPlatform(arr, dep, n) {
        // Step 1: Sort both arrays
        // Note: Javascript sort is string based by default, need numeric comparator
        arr.sort((a, b) => a - b);
        dep.sort((a, b) => a - b);

        let platforms_needed = 1; // 1st train ke liye 1 platform
        let max_platforms = 1;
        let i = 1; // arr pointer (Start from 2nd train)
        let j = 0; // dep pointer (Start from 1st train departure)

        // Step 2: Traverse
        while (i < n && j < n) {
            // New train arriving
            if (arr[i] <= dep[j]) {
                platforms_needed++;
                i++;
            }
            // Old train leaving
            else if (arr[i] > dep[j]) {
                platforms_needed--;
                j++;
            }

            // Update Max
            if (platforms_needed > max_platforms) {
                max_platforms = platforms_needed;
            }
        }

        return max_platforms;
    }
}

// --- Driver Code ---
const sol = new Solution();

// Example 1
// arr: 9:00, 9:40, 9:50, 11:00, 15:00, 18:00
// dep: 9:10, 12:00, 11:20, 11:30, 19:00, 20:00
const arr = [900, 940, 950, 1100, 1500, 1800];
const dep = [910, 1200, 1120, 1130, 1900, 2000];
const n = 6;

console.log("Min Platforms:", sol.findPlatform(arr, dep, n));

// Edge Case: Trains arriving and departing same time
// Train A: 1000-1030 
// Train B: 1000-1010
// Need 2 platforms.
const arr2 = [1000, 1000];
const dep2 = [1030, 1010];
console.log("Edge Case Platforms:", sol.findPlatform(arr2, dep2, 2));
