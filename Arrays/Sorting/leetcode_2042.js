/**
 * LeetCode 2042: Check if Numbers Are Ascending in a Sentence
 * Logic: Extract numbers from sentence and check if they are strictly increasing.
 */

var areNumbersAscending = function (s) {
    let prev = -1;
    let words = s.split(" ");

    for (let word of words) {
        // In JS, !isNaN("") is true, but since we split by space and tokens are non-empty,
        // it works. However, Number(word) for a non-numeric string like "box" is NaN.
        // The safest check is to verify if it's not NaN after conversion.
        let current = Number(word);

        if (!isNaN(current)) {
            if (current <= prev) {
                return false;
            } else {
                prev = current;
            }
        }
    }
    return true;
};

// Test
console.log("Test 1:", areNumbersAscending("1 box has 3 blue 4 red 6 green")); // true
console.log("Test 2:", areNumbersAscending("hello world 5 x 5")); // false
console.log("Test 3:", areNumbersAscending("sunset is at 7 51 pm")); // true
// Wait, "sunset is at 7 51 pm" -> [7, 51] -> 7 < 51 -> true.
// "abc 11 1 2" -> [11, 1, 2] -> false.
