/**
 * Problem: Permutations (Striver SDE Sheet Day 9)
 * Goal: Given an array nums of distinct integers, return all the possible permutations.
 * Example: [1,2,3] -> [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 */

/**
 * APPROACH 1: Using a Frequency Map (Visited Array)
 * Time Complexity: O(N! * N)
 * Space Complexity: O(N) (Path) + O(N) (Visited Array)
 */
function permuteWithMap(nums) {
    const result = [];
    const path = [];
    const visited = new Array(nums.length).fill(false);

    function solve() {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (!visited[i]) {
                visited[i] = true;
                path.push(nums[i]);
                solve();
                path.pop();
                visited[i] = false;
            }
        }
    }

    solve();
    return result;
}

/**
 * APPROACH 2: Using Backtracking & Swapping (Optimal Space)
 * Time Complexity: O(N! * N)
 * Space Complexity: O(1) (excluding result and recursion stack)
 */
function permuteInPlace(nums) {
    const result = [];

    function solve(index) {
        if (index === nums.length) {
            result.push([...nums]);
            return;
        }

        for (let i = index; i < nums.length; i++) {
            // Swap to create a new permutation
            [nums[index], nums[i]] = [nums[i], nums[index]];

            // Move to next position
            solve(index + 1);

            // BACKTRACK: Swap back to restore original state
            [nums[index], nums[i]] = [nums[i], nums[index]];
        }
    }

    solve(0);
    return result;
}

// TEST CASES
const nums = [1, 2, 3];
console.log("Input:", nums);
console.log("Permutations (Map):", JSON.stringify(permuteWithMap(nums)));
console.log("Permutations (Swap):", JSON.stringify(permuteInPlace(nums)));
