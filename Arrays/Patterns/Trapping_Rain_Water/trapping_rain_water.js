/**
 * Problem: Trapping Rain Water (LeetCode 42) - HARD 🌧️
 * 
 * Logic:
 * Given n non-negative integers representing an elevation map (bar graph),
 * compute how much water it can trap after raining.
 * 
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * 
 * CONCEPT:
 * Ek Building ke upar paani tabhi rukega jab:
 * 1. Uske LEFT mein usse lambi building ho.
 * 2. Uske RIGHT mein usse lambi building ho.
 * 
 * Formula (For any index i):
 * Water[i] = Min(LeftMax, RightMax) - Height[i]
 * (Agar negative aaye to 0, kyunki paani building ke andar nahi ghusega).
 * 
 * Strategies:
 * 1. Brute Force: Har element ke liye left aur right scan karo. O(N^2).
 * 2. Pre-Computation (Arrays): Pehle se LeftMax aur RightMax array bana lo. O(N).
 * 3. Two Pointers: Space optimize karke O(1) space. (Best).
 */

// Hum pehle Strategy 2 (Prefix/Suffix Arrays) se samjhenge, fir optimize karenge.

function trap(height) {
    let n = height.length;
    if (n === 0) return 0;

    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);

    // Step 1: Fill LeftMax Array
    // Har point pe batao: "Mere Left mein (mujhe milake) sabse lamba kaun?"

    // Step 2: Fill RightMax Array
    // Har point pe batao: "Mere Right mein (mujhe milake) sabse lamba kaun?"

    // Step 3: Calculate Water
    // Water = Math.min(leftMax[i], rightMax[i]) - height[i]

    return 0; // Final total sum
}

let height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log("Trapped Water:", trap(height));
