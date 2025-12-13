/* 
Pattern: Linear Scan (Single Pass)
Problem: Find Minimum and Maximum element in an Array
Complexity: Time O(n), Space O(1)
*/

function findMinMax(arr) {
    // Edge case: If array is empty
    if (arr.length === 0) {
        return "Array is empty!";
    }

    // Initialize min and max with the first element
    // This is safer than using 0 or very large numbers initially
    let min = arr[0];
    let max = arr[0];

    // Loop starting from 2nd element (index 1) since we already took index 0
    for (let i = 1; i < arr.length; i++) {

        // Check for new Max
        if (arr[i] > max) {
            max = arr[i];
        }

        // Check for new Min
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return { min, max }; // Return an object with both values
}

// --- Test Cases ---

// Case 1: Standard Array
const scores = [22, 14, 8, 17, 35, 3];
console.log("Scores:", scores);
const result = findMinMax(scores);
console.log("Min Score:", result.min);
console.log("Max Score:", result.max);

// Case 2: Negative Numbers
const temps = [-5, -10, 0, 5, 2];
console.log("\nTemps:", temps);
console.log("Result:", findMinMax(temps));
