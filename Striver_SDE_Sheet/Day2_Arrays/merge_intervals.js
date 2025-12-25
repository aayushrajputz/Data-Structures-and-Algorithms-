/**
 * Merge Overlapping Intervals (LeetCode 56)
 * Time Complexity: O(N log N) (due to sorting)
 * Space Complexity: O(N) (to store result)
 */

function mergeIntervals(intervals) {
    if (intervals.length <= 1) return intervals;

    // Step 1: Sort by start time
    intervals.sort((a, b) => a[0] - b[0]);

    let merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        let lastMerged = merged[merged.length - 1];

        // Step 2: Check for overlap
        if (current[0] <= lastMerged[1]) {
            // Merge them by updating the end time
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            // No overlap, push to result
            merged.push(current);
        }
    }

    return merged;
}

// Test Case
let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log("Merged Intervals:", mergeIntervals(intervals));
// Expected: [[1, 6], [8, 10], [15, 18]]
