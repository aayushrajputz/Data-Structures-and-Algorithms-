/**
 * Problem: N-th Root of an Integer (Day 11)
 * Pattern: Binary Search on Answer
 * Time Complexity: O(log(m) * n)
 */

class Solution {
    // Helper function (vahi overflow wala logic)
    checkPower(mid, n, m) {
        let ans = 1;
        for (let i = 1; i <= n; i++) {
            ans = ans * mid;
            if (ans > m) return 2; // Too high
        }
        if (ans === m) return 1; // Exact match
        return 0; // Too low
    }

    nthRoot(n, m) {
        // --- EDGE CASES ---
        if (m === 0) return 0;
        if (m === 1) return 1;

        let low = 1, high = m;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let midState = this.checkPower(mid, n, m);

            if (midState === 1) return mid;
            if (midState === 2) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return -1;
    }
}

// Test Cases
const sol = new Solution();
console.log("3rd root of 27:", sol.nthRoot(3, 27));   // Expected: 3
console.log("4th root of 69:", sol.nthRoot(4, 69));   // Expected: -1
console.log("2nd root of 100:", sol.nthRoot(2, 100)); // Expected: 10
console.log("3rd root of 0:", sol.nthRoot(3, 0));     // Expected: 0 (Test Case 7 Check)
