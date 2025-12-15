/**
 * Problem: Contains Duplicate (LeetCode 217)
 * Goal: Return true if any value appears at least twice.
 * Input: [1, 2, 3, 1] -> Output: true
 * Input: [1, 2, 3, 4] -> Output: false
 * 
 * --- Construct 1: Set ( The "Unique Box" ) 📦 ---
 * Set ek Hash Map jaisa hi hota hai, par usme sirf KEY hoti hai (Value nahi).
 * Set ke andar naturally DUPLICATES nahi aa sakte.
 * 
 * Logic:
 * 1. Ek empty Set banao.
 * 2. Har number ko check karo: "Kya tu Set mein pehle se hai?"
 *    - YES: Duplicate Found! Return true.
 *    - NO: Set mein daal do.
 */

function containsDuplicate(nums) {
    let seen = new Set();

    for (let num of nums) {
        if (seen.has(num)) {
            return true; // Pakda gaya!
        }
        seen.add(num);
    }
    return false; // Sab unique nikle
}

// --- Brute Force vs Set ---
// Brute Force: Do loops (O(N^2)). 🐢
// Set Approach: Ek loop (O(N)). ⚡

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
