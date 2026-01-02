/**
 * Problem: Assign Cookies (LeetCode #455)
 * Pattern: Greedy with Two Pointers
 * 
 * Scenario:
 * - g: Array of children's greed factor (e.g., [1, 2, 3] means child 1 needs 1 cookie, child 2 needs 2...)
 * - s: Array of cookie sizes (e.g., [1, 1] means you have two cookies of size 1)
 * 
 * Strategy:
 * 1. Sort both children's greed (g) and cookie sizes (s) in ascending order.
 * 2. Use two pointers to iterate through both:
 *    - If the current cookie 's[j]' is large enough for child 'g[i]', satisfy the child and move to the next.
 *    - Always move to the next cookie 'j' because if this one didn't satisfy the current child, 
 *      it definitely won't satisfy any greedier ones.
 * 
 * Complexity: O(N log N + M log M) where N = kids, M = cookies.
 */

var findContentChildren = function (g, s) {
    // Step 1: Sort both arrays (Smallest to Largest)
    // We want to satisfy the least greedy children first with the smallest possible cookies.
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let childIndex = 0;
    let cookieIndex = 0;
    let contentChildren = 0;

    // Step 2: Use Two Pointers
    while (childIndex < g.length && cookieIndex < s.length) {
        // If the current cookie can satisfy the current child
        if (s[cookieIndex] >= g[childIndex]) {
            contentChildren++;
            childIndex++; // Move to next child
        }

        // Always move to the next cookie (either we used it or it was too small)
        cookieIndex++;
    }

    return contentChildren;
};

// --- Driver Code ---
const children = [1, 2, 3]; // Greed factors
const cookies = [1, 1];     // Cookie sizes

console.log("Number of content children:", findContentChildren(children, cookies));
// Expected: 1 
// (Cookie of size 1 satisfies child with greed 1. Remaining cookie 1 cant satisfy child with greed 2).

const children2 = [1, 2];
const cookies2 = [1, 2, 3];
console.log("Example 2:", findContentChildren(children2, cookies2));
// Expected: 2 (1 satisfies 1, 2 satisfies 2)
