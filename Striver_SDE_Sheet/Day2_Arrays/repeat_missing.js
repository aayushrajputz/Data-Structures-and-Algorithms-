/**
 * Repeat and Missing Number: Mathematical Approach
 * Time Complexity: O(N)
 * Space Complexity: O(1)
 */

function findRepeatMissing(nums) {
    let n = nums.length;

    // S = n*(n+1)/2 (Expected sum)
    // S2 = n*(n+1)*(2n+1)/6 (Expected sum of squares)
    let S = (n * (n + 1)) / 2;
    let S2 = (n * (n + 1) * (2 * n + 1)) / 6;

    let actualS = 0;
    let actualS2 = 0;

    for (let i = 0; i < n; i++) {
        actualS += nums[i];
        actualS2 += nums[i] * nums[i];
    }

    // Eq 1: X - Y = val1
    let val1 = actualS - S;

    // Eq 2: X^2 - Y^2 = val2 => (X-Y)(X+Y) = val2
    let val2 = actualS2 - S2;

    // X + Y = val2 / (X-Y)
    let val3 = val2 / val1;

    // X = (val1 + val3) / 2
    let repeat = (val1 + val3) / 2;
    let missing = val3 - repeat;

    return [repeat, missing];
}

// Test case
let arr = [3, 1, 2, 5, 3];
console.log("Repeat and Missing:", findRepeatMissing(arr)); // Expected: [3, 4]
