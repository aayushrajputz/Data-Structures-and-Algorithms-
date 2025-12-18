/**
 * Problem: Valid Palindrome (LeetCode 125)
 * Difficulty: Easy (Pattern: Two Pointers)
 * 
 * Logic:
 * 1. Sabse pehle string ko clean karo (Lower case aur non-alphanumeric hatao)
 * 2. Left pointer = start, Right pointer = end
 * 3. Dono ko compare karo. Agar match nahi hua toh false.
 */

function isPalindrome(s) {
    let cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    let left = 0;
    let right = cleanStr.length - 1;

    while (left < right) {
        if (cleanStr[left] !== cleanStr[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

// Test Cases
console.log("Is 'racecar' palindrome?:", isPalindrome("racecar")); // Expected: true
console.log("Is 'A man, a plan, a canal: Panama' palindrome?:", isPalindrome("A man, a plan, a canal: Panama")); // Expected: true
console.log("Is 'hello' palindrome?:", isPalindrome("hello")); // Expected: false
