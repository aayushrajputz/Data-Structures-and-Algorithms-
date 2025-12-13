/* 
Pattern: Two Pointers (Snowball / Partitioning) - Both start from Left
Problem: Move all Zeroes to the end while maintaining the relative order of non-zero elements.
Complexity: Time O(n), Space O(1)
*/

function moveZeroes(arr) {
    let L = 0; // Left Pointer: Tracks where to place the next Non-Zero

    console.log("Start:", arr);

    // R (Right Pointer) acts as the explorer
    for (let R = 0; R < arr.length; R++) {

        if (arr[R] !== 0) {
            // Logic: Agar Non-Zero mila, toh L ke saath SWAP karo

            // Optimization: Only swap if L and R are different
            // (Avoids swapping a number with itself if there are no zeros yet)
            if (L !== R) {
                [arr[L], arr[R]] = [arr[R], arr[L]];
                // debugging log
                // console.log(`Swapped index ${L} and ${R} ->`, arr);
            }

            L++; // L ko aage badhao kyunki wahan ab sahi number hai
        }
        // If arr[R] IS zero, do nothing. Just R will increase.
    }

    return arr;
}

// --- Test Cases ---

// Case 1: Mixed Zeros
const nums1 = [0, 1, 0, 3, 12];
console.log("\nInput:", nums1);
console.log("Output:", moveZeroes([...nums1])); // Passing copy

// Case 2: Zeroes at start
const nums2 = [0, 0, 0, 5, 1];
console.log("\nInput:", nums2);
console.log("Output:", moveZeroes([...nums2]));

// Case 3: No Zeros
const nums3 = [1, 2, 3];
console.log("\nInput:", nums3);
console.log("Output:", moveZeroes([...nums3]));

// Case 4: Suresh's Resume (Skills vs Fluff)
// 0 = Fluff, 1 = Skill
const sureshResume = [0, 1, 0, 0, 1];
console.log("\nSuresh Resume Cleaned:", moveZeroes([...sureshResume]));
