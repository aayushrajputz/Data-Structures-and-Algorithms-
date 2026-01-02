/**
 * Problem: Job Sequencing (GFG Style Input)
 * Logic: Greedy (Sort Profit DESC + Linear Search for Slot)
 * 
 * Strategy:
 * 1. Convert separate arrays to Job Objects.
 * 2. Sort by Profit (High to Low).
 * 3. Find Max Deadline to size our calendar.
 * 4. Try to book slots from [deadline -> 1].
 */

class Solution {
    jobSequencing(deadline, profit) {
        let n = deadline.length;

        // 1. Combine
        let jobs = [];
        for (let i = 0; i < n; i++) {
            jobs.push({ id: i + 1, dead: deadline[i], prof: profit[i] });
        }

        // 2. Sort by Profit DESC
        jobs.sort((a, b) => b.prof - a.prof);

        // 3. Max Deadline (Cap at N because we can't do more than N jobs)
        // Optimization: Deadline > N ka koi fayda nahi.
        let maxDeadline = 0;
        for (let i = 0; i < n; i++) {
            maxDeadline = Math.max(maxDeadline, jobs[i].dead);
        }

        // 4. Slots
        let slots = new Array(maxDeadline + 1).fill(-1);

        let count = 0;
        let totalProfit = 0;

        // 5. Booking
        for (let i = 0; i < n; i++) {
            let curr = jobs[i];
            // Find slot
            // Optimization: Start search from min(deadline, maxDeadline)
            for (let j = curr.dead; j > 0; j--) {
                if (slots[j] === -1) {
                    slots[j] = curr.id;
                    count++;
                    totalProfit += curr.prof;
                    break;
                }
            }
        }
        return [count, totalProfit];
    }
}

// Driver code to test locally
const sol = new Solution();
const D = [4, 1, 1, 1];
const P = [20, 10, 40, 30];
console.log(sol.jobSequencing(D, P)); // Should be [2, 60]
