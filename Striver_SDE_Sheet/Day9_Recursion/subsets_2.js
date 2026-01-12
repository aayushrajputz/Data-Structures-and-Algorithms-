/**
 * Problem: Subsets II (Unique Subsets) - Striver SDE Sheet Day 9
 * Concept: Recursion with For-loop to handle duplicates.
 */

function subsetsWithDup(nums) {
    let result = [];
    let n = nums.length;

    // 1. SORT is mandatory to bring duplicates together
    nums.sort((a, b) => a - b);

    function findSubsets(index, currentSubset) {
        // At every step, the current subset is a valid subset
        result.push([...currentSubset]);

        for (let i = index; i < n; i++) {
            // 2. SKIP Condition: If current element is same as previous
            // AND it's not the first element of this recursive level
            if (i > index && nums[i] === nums[i - 1]) continue;

            // 3. PICK
            currentSubset.push(nums[i]);
            findSubsets(i + 1, currentSubset);

            // 4. BACKTRACK (Remove for 'Not Pick' scenario)
            currentSubset.pop();
        }
    }

    findSubsets(0, []);
    return result;
}

// --- Test Case ---
const input = [1, 2, 2];
console.log("Input:", input);
console.log("Unique Subsets:", subsetsWithDup(input));
