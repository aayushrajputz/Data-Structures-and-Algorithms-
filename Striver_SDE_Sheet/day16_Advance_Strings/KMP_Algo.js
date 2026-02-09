/**
 * MISSION: KMP Algorithm (Search Pattern in Text)
 * TARGET: SDE-1 Razorpay / FAANG
 * Mindset: TITAN MOOD 🔥
 */

function computeLPS(pattern) {
    let m = pattern.length;
    let lps = new Array(m).fill(0);
    let len = 0; // Length of the previous longest prefix suffix
    let i = 1;

    while (i < m) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                // Smart Jump: Backtrack within the pattern
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}

function KMP_Search(text, pattern) {
    let n = text.length;
    let m = pattern.length;
    let lps = computeLPS(pattern);

    let i = 0; // index for text
    let j = 0; // index for pattern

    console.log("Starting Search...");

    while (i < n) {
        if (text[i] === pattern[j]) {
            i++;
            j++;
        }

        if (j === m) {
            console.log("TITAN MOOD! Pattern found at index: " + (i - j));
            j = lps[j - 1]; // Reset 'j' using LPS to find next potential match
        } else if (i < n && text[i] !== pattern[j]) {
            // MISMATCH: The Jump Logic
            if (j !== 0) {
                j = lps[j - 1]; // Smart Jump! Don't reset 'i'
            } else {
                i++; // Only increment text index if pattern index is at start
            }
        }
    }
}

// BATTLE FIELD (Test Case)
let text = "ABABDABACDABABC";
let pattern = "ABABC";

KMP_Search(text, pattern);