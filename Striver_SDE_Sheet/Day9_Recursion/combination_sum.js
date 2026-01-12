/**
 * Problem: Combination Sum I (Striver SDE Sheet Day 9)
 * Concept: Infinite supply of elements. (Pick same element multiple times).
 */

function combinationSum(candidates, target) {
    let result = [];
    let n = candidates.length;

    function solve(index, currentTarget, currentCombination) {
        // 1. BASE CASE
        if (index === n) {
            if (currentTarget === 0) {
                result.push([...currentCombination]);
            }
            return;
        }

        // 2. PICK Condition
        // Hum isi index ko dubaara pick kar sakte hain agar sum bacha hai
        if (candidates[index] <= currentTarget) {
            currentCombination.push(candidates[index]);
            
            // MAGIC: index + 1 nahi kiya, index hi rakha hai (for reuse)
            solve(index, currentTarget - candidates[index], currentCombination);
            
            // Backtrack
            currentCombination.pop();
        }

        // 3. NOT PICK
        // Agle index pe move karo
        solve(index + 1, currentTarget, currentCombination);
    }

    solve(0, target, []);
    return result;
}

// --- Test Case (BinaryPDF Monetization) ---
const coins = [2, 3, 6, 7];
const price = 7;
console.log("Coins:", coins, "Target Price:", price);
console.log("Combinations:", combinationSum(coins, price));
