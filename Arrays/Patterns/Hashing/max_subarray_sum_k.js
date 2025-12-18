/**
 * Problem: Maximum Size Subarray Sum Equals K
 * Pattern: Prefix Sum + Hash Map
 * 
 * Logic:
 * 1. Maintain 'currSum' while iterating.
 * 2. If currSum === k, maxLen is i + 1.
 * 3. Search for (currSum - k) in our Map.
 * 4. If found, calculate length: i - map.get(currSum - k).
 * 5. Update maxLen.
 * 6. Store currSum in Map ONLY if it's NOT already there (to keep the first index for longest length).
 */

function maxSubArrayLen(nums, k) {
    let map = new Map();
    let currSum = 0;
    let maxLen = 0;

    for (let i = 0; i < nums.length; i++) {
        // STEP 1: Har kadam pe total height (sum) jodo
        currSum = currSum + nums[i];

        // STEP 2: Agar shuruat se lekar abhi tak ka total hi 'k' hai
        // Toh seedha length (i + 1) ho jayegi. Sabse badi window yehi hai.
        if (currSum === k) {
            maxLen = i + 1;
        }

        // STEP 3: "Diary Check" Rule (Peeche mudke dekho)
        // Formula: Agar abhi height 10 hai aur target 3 hai, toh check karo kya raste mein 7 (10-3) tha?
        let target = currSum - k;

        if (map.has(target)) {
            // Agar raste mein pehle kabhi 'target' sum mila tha
            // Toh udhar se lekar abhi tak ka gap (i - puranaIndex) hi humara k hai!
            let puranaIndex = map.get(target);
            maxLen = Math.max(maxLen, i - puranaIndex);
        }

        // STEP 4: Diary Update (Memory)
        // Sirf tabhi likhenge jab ye Sum pehle na aaya ho ( !map.has )
        // Kyun? Taaki humein sabse PURANA (left-most) index mile, jisse window LAMBI bane.
        if (!map.has(currSum)) {
            map.set(currSum, i);
        }
    }


    return maxLen;
}

// Test Cases
console.log("Test 1 ([1, -1, 5, -2, 3], k=3):", maxSubArrayLen([1, -1, 5, -2, 3], 3)); // Expected: 4 ([1, -1, 5, -2])
console.log("Test 2 ([-2, -1, 2, 1], k=1):", maxSubArrayLen([-2, -1, 2, 1], 1));     // Expected: 2 ([-1, 2])
