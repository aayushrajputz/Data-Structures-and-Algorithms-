/**
 * Largest Subarray with 0 Sum
 * Approach: Prefix Sum + Hash Map (O(N))
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */

function maxLen(arr) {
    let n = arr.length;
    let mpp = new Map(); // Diary: { Sum : Kis index par pehli baar dikha }
    let maxi = 0; // Max Length track karne ke liye
    let sum = 0; // Current Running Total

    for (let i = 0; i < n; i++) {
        sum += arr[i]; // Unchai (Prefix Sum) badhate jao

        // CASE 1: Agar sum khud 0 ho jaye!
        // Matlab Index 0 se abhi tak ka total hi zero hai. 
        // Toh seedha length 'i + 1' hai.
        if (sum === 0) {
            maxi = i + 1;
        }
        else {
            // CASE 2: Kya ye unchai pehle kabhi aayi thi?
            if (mpp.has(sum)) {
                // Agar haan, toh wo index nikalo jahan ye pehle dikhi thi
                let prevIndex = mpp.get(sum);
                // Difference: i - prevIndex hi us zero-sum window ki length hai
                maxi = Math.max(maxi, i - prevIndex);
            }
            else {
                // CASE 3: Nayi unchai hai, diary mein likh lo.
                // Humein LONGGEST chahiye, isliye hum sirf PEHLI BAAR store karte hain.
                mpp.set(sum, i);
            }
        }
    }

    return maxi;
}

// Test Case
let arr1 = [15, -2, 2, -8, 1, 7, 10, 23];
console.log("Output for [15, -2, 2, -8, 1, 7, 10, 23]:", maxLen(arr1)); // Expected: 5 ([-2, 2, -8, 1, 7])

let arr2 = [1, 2, 3];
console.log("Output for [1, 2, 3]:", maxLen(arr2)); // Expected: 0

let arr3 = [1, 0, -1];
console.log("Output for [1, 0, -1]:", maxLen(arr3)); // Expected: 3 ([1, 0, -1])
