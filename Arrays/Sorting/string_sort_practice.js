/**
 * String Sorting Practice
 * 
 * Task 1: Check Anagram using Sorting
 * Task 2: Sort words in a sentence by Length
 */

// Task 1: Check if s1 and s2 are anagrams
// Example: "listen", "silent" -> true
function checkAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;

    // Split, Sort, Join
    let sortedS1 = s1.split('').sort().join('');
    let sortedS2 = s2.split('').sort().join('');

    return sortedS1 === sortedS2;
}

// Task 2: Sort words by length
// Example: "I am learning" -> "I am learning" (1, 2, 8 length)
// Example: "Code logic is fun" -> "is fun Code logic" (2, 3, 4, 5)
function sortSentenceByLength(sentence) {
    let words = sentence.split(" ");

    // Custom Comparator: Compare lengths
    words.sort((a, b) => a.length - b.length);

    return words.join(" ");
}

// Test cases
console.log("Anagram Check:", checkAnagram("listen", "silent"));
console.log("Sort by Length:", sortSentenceByLength("Code logic is fun"));
