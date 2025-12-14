/**
 * Problem: Maximum Circular Subarray Sum
 * 
 * Logic:
 * In a circular array, the max subarray can be:
 * 1. Normal (in the middle) -> Use Standard Kadane for Max.
 * 2. Wrapped (spanning end and start) -> Use Total Sum - Minimum Subarray Sum.
 */

function maxCircularSubarray(nums) {
    let totalSum = 0;
    let currMax = 0;
    let globalMax = -infinity;

    //  reverse of kadne algorithm 

    let currMin = 0;
    let globalMin = Infinity;

    for (let num of nums) {

        totalSum = totalSum + num;
        currMax = currMax + num;
        if (currMax > globalMax) {
            globalMax = currMax;
        }
        if (currMax < 0) {
            currMax = 0;
        }
        currMin = currMin + num;
        if (currMin < globalMin) {
            globalMin = currMin;
        }
        if (currMin > 0) {
            currMin = 0;
        }
    }

    if (globalMax < 0) {
        return globalMax
    }

    return Math.max(globalMax, totalSum - globalMin)
}
