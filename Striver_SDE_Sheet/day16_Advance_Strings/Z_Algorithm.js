/**
 * MISSION: Z-Algorithm (Linear Pattern Matching)
 * TARGET: SDE-1 Razorpay / FAANG
 * Complexity: O(N + M)
 */

function getZArray(str) {
    let n = str.length;
    let z = new Array(n).fill(0);
    let l = 0, r = 0;

    for (let i = 1; i < n; i++) {
        // Case 1: i is inside the current Z-box [L, R]
        if (i <= r) {
            z[i] = Math.min(r - i + 1, z[i - l]);
        }

        // Case 2: Try to extend the match beyond R
        while (i + z[i] < n && str[z[i]] === str[i + z[i]]) {
            z[i]++;
        }

        // If match extends beyond R, update the Z-box [L, R]
        if (i + z[i] - 1 > r) {
            l = i;
            r = i + z[i] - 1;
        }
    }
    return z;
}

function searchPattern(text, pattern) {
    // Standard trick: Concat pattern + special char + text
    let concat = pattern + "$" + text;
    let z = getZArray(concat);
    let m = pattern.length;

    console.log("Searching...");
    for (let i = 0; i < z.length; i++) {
        if (z[i] === m) {
            console.log("TITAN MOOD! Pattern found at index: " + (i - m - 1));
        }
    }
}

// BATTLE FIELD
let text = "baabaa";
let pattern = "aab";
searchPattern(text, pattern);