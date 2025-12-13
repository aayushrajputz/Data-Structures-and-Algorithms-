function removeDuplicates(arr) {
    if (arr.length === 0) return 0;

    let L = 0; // Yeh bata raha hai "Last Unique element kahan hai"

    for (let R = 1; R < arr.length; R++) {
        // Agar naya number mila (Duplicate NAHI hai)
        if (arr[R] !== arr[L]) {
            L++;           // 1. L ke liye nayi seat banao (Aage badhao)
            arr[L] = arr[R]; // 2. Naye number ko wahan copy kar do.
        }
        // Agar duplicate hai (else), toh R aage badh jayega, L wahi rukega.
    }

    // Last mein array clean dikhane ke liye truncate bhi kar sakte hain (optional)
    arr.length = L + 1;

    return L + 1; // Count of unique elements
}

// --- Test Cases ---

// Case 1: Standard Sorted
const arr1 = [1, 1, 2];
console.log("\nInput:", [1, 1, 2]);
console.log("Count:", removeDuplicates(arr1));
console.log("Modified Array:", arr1);

// Case 2: Many Duplicates
const arr2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log("\nInput:", [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
console.log("Count:", removeDuplicates(arr2));
console.log("Modified Array:", arr2);

// Case 3: All Same
const arr3 = [7, 7, 7, 7];
console.log("\nInput:", [7, 7, 7, 7]);
console.log("Count:", removeDuplicates(arr3));
console.log("Modified Array:", arr3);