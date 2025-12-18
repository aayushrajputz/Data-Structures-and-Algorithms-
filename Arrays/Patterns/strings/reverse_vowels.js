/**
 * Problem: Reverse Vowels of a String (LeetCode 345)
 */

function reverseVowels(s) {
    let vowels = "aeiouAEIOU";
    let arr = s.split('');
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !vowels.includes(arr[left])) {
            left++;
        }
        while (left < right && !vowels.includes(arr[right])) {
            right--;
        }

        [arr[left], arr[right]] = [arr[right], arr[left]];

        left++;
        right--;
    }
    return arr.join('');
}

// Test Cases
console.log("Reverse 'hello':", reverseVowels("hello")); // Expected: "holle"
console.log("Reverse 'leetcode':", reverseVowels("leetcode")); // Expected: "leotcede"
console.log("Reverse 'Aa':", reverseVowels("Aa")); // Expected: "aA"
