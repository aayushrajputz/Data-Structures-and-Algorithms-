
/**
 * Problem: N Meetings in One Room
 * Strategy: Greedy Approach (Sort by End Time)
 * 
 * Logic:
 * 1. We want to finish meetings as early as possible to free up the room.
 * 2. So, sort all meetings by their END time in ascending order.
 * 3. Pick the first meeting.
 * 4. For subsequent meetings, pick if (current.start > last_picked.end).
 * 
 * Complexity: O(N log N) for sorting + O(N) for iteration => Total O(N log N)
 * Space: O(N) to store meeting objects
 */

class Solution {
    // Function to find the maximum number of meetings that can
    // be performed in a meeting room.
    maxMeetings(start, end, n) {
        let meetings = [];

        // 1. Create meeting objects with start, end, and original position
        for (let i = 0; i < n; i++) {
            meetings.push({
                start: start[i],
                end: end[i],
                pos: i + 1 // 1-based indexing for position
            });
        }

        // 2. Sort by End Time (Ascending)
        // If end times are same, sort by pos (optional, for stable output)
        meetings.sort((a, b) => {
            if (a.end !== b.end) return a.end - b.end;
            return a.pos - b.pos;
        });

        let count = 1; // First meeting is continually picked
        let lastEndTime = meetings[0].end;
        let selectedMeetings = [meetings[0].pos]; // Store order if needed

        // 3. Iterate and pick greedy
        for (let i = 1; i < n; i++) {
            // If current meeting starts AFTER the last one ended
            if (meetings[i].start > lastEndTime) {
                count++;
                lastEndTime = meetings[i].end;
                selectedMeetings.push(meetings[i].pos);
            }
        }

        return count;
    }
}

// --- Driver Code for Testing ---
const sol = new Solution();
const start = [1, 3, 0, 5, 8, 5];
const end = [2, 4, 6, 7, 9, 9];
const n = 6;

console.log("Max Meetings:", sol.maxMeetings(start, end, n));

// Edge Case: Long meeting starts first
const start2 = [1, 2, 4];
const end2 = [100, 3, 5]; // Meeting 1 (1-100) should be avoided
// Ideally picking 2 (2-3) and 3 (4-5) gives 2 meetings.
// If sorted by end time: (2,3), (4,5), (1,100).
// 1. Pick (2,3). End=3.
// 2. Pick (4,5). Start 4 > 3. Pick. End=5.
// 3. Check (1,100). Start 1 < 5. Skip.
// Result: 2. Correct.
console.log("Edge Case Max Meetings:", sol.maxMeetings(start2, end2, 3));
