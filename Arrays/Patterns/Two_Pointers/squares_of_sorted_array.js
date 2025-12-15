/**
 * Problem Breakdown: Squares of a Sorted Array
 * Input: [-4, -1, 0, 3, 10]
 * Goal: [0, 1, 9, 16, 100] (Sorted Squares)
 * 
 * WHY IS THIS TRICKY?
 * 1. Array sorted hai (-4 chota hai).
 * 2. Par Square karne pe negative number positive ban jata hai (-4 * -4 = 16).
 * 3. Iska matlab: Sabse BADE squares ya to START mein honge (negative wale) ya END mein (positive wale).
 * 4. Sabse CHOTA square (0) kahin beech mein hoga.
 * 
 * STRATEGY: REVERSE FILLING (Ulta Bharna)
 * Hum result array ko PEECHE se bharenge. Kyunki hume ye pakka pata hai ki sabse BADA number kaunsa hai (Start ya End mein se ek).
 */

function sortedSquares(nums) {
    let n = nums.length;
    let result = new Array(n); // Khali array result ke liye

    // Pointers Setup
    let left = 0;           // Start wala pointer (-4)
    let right = n - 1;      // End wala pointer (10)
    let k = n - 1;          // Result array ka pointer (Last position se shuru karenge)

    // Loop jab tak pointers takra na jayein
    while (left <= right) {

        // Dono ka square nikalo
        let leftVal = nums[left] * nums[left];   // -4 * -4 = 16
        let rightVal = nums[right] * nums[right]; // 10 * 10 = 100

        // Compare karo: Bada Kaun?
        if (leftVal > rightVal) {
            // Agar Left wala square bada hai (e.g., -10 vs 2)
            result[k] = leftVal; // Last seat pe Left wala bitha do
            left++;              // Left pointer aage badhao (ye use ho gaya)
        } else {
            // Agar Right wala square bada (or barabar) hai
            result[k] = rightVal; // Last seat pe Right wala bitha do
            right--;              // Right pointer peeche lao (ye use ho gaya)
        }

        // Result ki agli khali seat pe jao (left side)
        k--;
    }

    return result;
}

let nums = [-4, -1, 0, 3, 10];
console.log("Sorted Squares:", sortedSquares(nums));
