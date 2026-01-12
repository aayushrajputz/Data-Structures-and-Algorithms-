/**
 * Problem: Combination Sum II (Unique Combinations) - Striver SDE Sheet Day 9
 * Concept: Use each element ONCE, handle duplicates using for-loop.
 */

function combinationSum2(candidates, target) {
    let result = [];
    let n = candidates.length;

    // 1. Must SORT to handle duplicates
    candidates.sort((a, b) => a - b);

    function findCombinations(index, currentTarget, currentCombination) {
        // Base Case: Target achieved
        if (currentTarget === 0) {
            result.push([...currentCombination]);
            return;
        }

        for (let i = index; i < n; i++) {
            // 2. Optimization: If current element is bigger than target, 
            // no need to check further elements (as array is sorted)
            if (candidates[i] > currentTarget) break;

            // 3. Duplicate Handling (The Titan's Trick)
            if (i > index && candidates[i] === candidates[i - 1]) continue;

            // 4. Picking the element
            currentCombination.push(candidates[i]);

            // Move to next index (i + 1) because each element used only once
            findCombinations(i + 1, currentTarget - candidates[i], currentCombination);

            // Backtrack
            currentCombination.pop();
        }
    }

    findCombinations(0, target, []);
    return result;
}

// --- Test Case ---
const input = [10, 1, 2, 7, 6, 1, 5];
const target = 8;
console.log("Input:", input, "Target:", target);
console.log("Unique Combinations:", combinationSum2(input, target));
