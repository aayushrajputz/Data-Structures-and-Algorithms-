/* 
Pattern: Two Pointers
Problem: Reverse an Array (In-place)
Complexity: Time O(n), Space O(1)
*/

function reverseArray(arr) {
    let start = 0;
    let end = arr.length - 1;

    console.log("Starting Swap Process...");

    while (start < end) {
        // Swap elements
        // Modern JS destructuring swap
        [arr[start], arr[end]] = [arr[end], arr[start]];

        // Move pointers
        start++;
        end--;
    }
    return arr;
}

// --- Test Cases ---

// Case 1: Numbers
const numbers = [1, 2, 3, 4, 5];
console.log("\nOriginal:", numbers);
console.log("Reversed:", reverseArray(numbers));

// Case 2: String (Suresh Example)
const sureshLife = ["Govt Job", "Wait", "Wait", "Prepare"];
console.log("\nSuresh Life Original:", sureshLife);
console.log("Suresh Life Reversed (Growth):", reverseArray([...sureshLife]));
