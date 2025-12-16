/**
 * Problem: K Radius Subarray Averages (LeetCode 2090)
 * Pattern: Fixed Size Sliding Window (Size = 2k + 1) 📏
 * 
 * Input: nums = [7,4,3,9,1,8,5,2,6], k = 3
 * Output: [-1,-1,-1,5,4,4,-1,-1,-1]
 * 
 * --- Logic ---
 * 1. Window Size: Center element ke `k` left aur `k` right.
 *    Total Window Size = `k + 1 (center) + k` = `2*k + 1`.
 * 
 * 2. Range:
 *    - Valid centers shuru hote hain index `k` se.
 *    - Khatam hote hain index `n - k - 1` pe.
 *    - Iske bahar waale elements ka average `-1` rahega (Kyunki complete window nahi ban sakti).
 * 
 * 3. Strategy:
 *    - Step 1: Pehle `2k+1` elements ka sum nikalo (Initial Window).
 *      Center will be at index `k`.
 *    - Step 2: Average calculate karo (`Sum / WindowSize`) aur Result array mein store karo.
 *    - Step 3: SLIDE -> `Sum + New - Old`.
 */

function getAverages(nums, k) {
    let n = nums.length;
    let windowSize = 2 * k + 1;
    let averages = new Array(n).fill(-1);

    if (n < windowSize) return averages;

    let currentSum = 0;

    // Step 1: Fill Initial Window (indexes 0 to 2k)
    for (let i = 0; i < windowSize; i++) {
        currentSum += nums[i];
    }

    // Is window ka center kaun hai? -> Index `k`.
    averages[k] = Math.floor(currentSum / windowSize);

    // Step 2: Slide Logic
    // Center `k` se `k+1` pe shift hoga.
    // Right boundary `windowSize` (specifically 2k+1) se aage badhegi.

    // Loop `i` represents the NEW rightmost element added to window
    for (let i = windowSize; i < n; i++) {
        // Remove Oldest: `i - windowSize` (Jo sabse peeche tha)
        let elementGoingOut = nums[i - windowSize];

        // Add Newest: `nums[i]`
        let elementComingIn = nums[i];

        currentSum = currentSum - elementGoingOut + elementComingIn;

        // Current Center: `i - k`
        let centerIndex = i - k;
        averages[centerIndex] = Math.floor(currentSum / windowSize);
    }

    return averages;
}

let nums = [7, 4, 3, 9, 1, 8, 5, 2, 6];
let k = 3;
console.log("K Radius Averages:", getAverages(nums, k));
