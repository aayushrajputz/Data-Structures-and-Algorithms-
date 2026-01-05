/**
 * Level 4: Array and String Manipulation
 * LeetCode #125: Valid Palindrome (Logic)
 * Goal: Handle pointers in recursion.
 */

// 1. Reverse an Array
function reverseArray(arr, left, right) {
    if (left >= right) return; // Base Case

    // Swap
    [arr[left], arr[right]] = [arr[right], arr[left]];

    // Move inwards
    reverseArray(arr, left + 1, right - 1);
}



let testArr = [1, 2, 3, 4, 5];
reverseArray(testArr, 0, testArr.length - 1);
console.log("Reversed Array:", testArr);

console.log("Is 'racecar' palindrome?", isPalindrome("racecar", 0));
console.log("Is 'titan' palindrome?", isPalindrome("titan", 0));

/**
 * Titan Note:
 * Transitioning from Iterative (using while(l<r)) to Recursive.
 * We are just moving the pointers 'l' and 'r' in each call instead of a loop.
 */
