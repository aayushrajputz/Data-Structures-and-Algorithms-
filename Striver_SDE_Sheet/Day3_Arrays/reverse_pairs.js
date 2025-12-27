/**
 * LeetCode 493: Reverse Pairs
 * Approach: Modified Merge Sort (Divide & Conquer)
 * Time Complexity: O(N log N)
 * Space Complexity: O(N)
 */

var reversePairs = function (nums) {
    // 1. Counting Function (The Predator)
    function countPair(nums, low, mid, high) {
        let count = 0;
        let j = mid + 1;

        for (let i = low; i <= mid; i++) {
            while (j <= high && nums[i] > 2 * nums[j]) {
                j++;
            }
            count += j - (mid + 1);
        }
        return count;
    }

    // 2. Merging Function (The Combiner)
    function merge(nums, low, mid, high) {
        let temp = [];
        let left = low;
        let right = mid + 1;

        while (left <= mid && right <= high) {
            if (nums[left] <= nums[right]) {
                temp.push(nums[left++]);
            } else {
                temp.push(nums[right++]);
            }
        }

        while (left <= mid) temp.push(nums[left++]);
        while (right <= high) temp.push(nums[right++]);

        for (let i = low; i <= high; i++) {
            nums[i] = temp[i - low];
        }
    }

    // 3. Recursive Function (The Divider)
    function mergeSort(nums, low, high) {
        if (low >= high) return 0;

        let mid = Math.floor(low + (high - low) / 2);
        let count = 0;

        count += mergeSort(nums, low, mid);
        count += mergeSort(nums, mid + 1, high);

        // Count pairs before merging to keep arrays sorted
        count += countPair(nums, low, mid, high);

        merge(nums, low, mid, high);
        return count;
    }

    // Start recursion
    return mergeSort(nums, 0, nums.length - 1);
};

// Test Case
console.log("Output for [1, 3, 2, 3, 1]:", reversePairs([1, 3, 2, 3, 1])); // Expected: 2
console.log("Output for [2, 4, 3, 5, 1]:", reversePairs([2, 4, 3, 5, 1])); // Expected: 3
