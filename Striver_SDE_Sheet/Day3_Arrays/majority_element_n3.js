/**
 * LeetCode 229: Majority Element (> n/3)
 * Time Complexity: O(N) + O(N) = O(N)
 * Space Complexity: O(1)
 */

function majorityElement(nums) {
    let n = nums.length;
    let ele1 = -Infinity,
        ele2 = -Infinity;
    let cnt1 = 0,
        cnt2 = 0;

    // Phase 1: Finding 2 potential candidates
    for (let num of nums) {
        if (num === ele1) {
            cnt1++;
        } else if (num === ele2) {
            cnt2++;
        } else if (cnt1 === 0) {
            ele1 = num;
            cnt1 = 1;
        } else if (cnt2 === 0) {
            ele2 = num;
            cnt2 = 1;
        } else {
            // Triple-cancellation logic
            cnt1--;
            cnt2--;
        }
    }

    // Phase 2: Verification
    let result = [];
    let checkCnt1 = 0,
        checkCnt2 = 0;

    for (let num of nums) {
        if (num === ele1) checkCnt1++;
        if (num === ele2) checkCnt2++;
    }

    if (checkCnt1 > Math.floor(n / 3)) result.push(ele1);
    if (checkCnt2 > Math.floor(n / 3)) result.push(ele2);

    return result;
}

// Test Case
console.log("Majority (> n/3) [1,2,1,2,1,2,3]:", majorityElement([1, 2, 1, 2, 1, 2, 3])); // Expected: [1, 2]
