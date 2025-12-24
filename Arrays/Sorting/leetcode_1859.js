/**
 * LeetCode 1859: Sorting the Sentence
 * Logic: Extract the number at the end of each word and place the word 
 * at (number - 1) index in a result array.
 */

var sortSentence = function (s) {
    // 1. Split sentence into words array
    let words = s.split(" ");

    // 2. Create a result array of the same length
    let result = new Array(words.length);

    for (let word of words) {
        let index = word[word.length - 1];
        let actualWord = word.slice(0, word.length - 1);
        result[index - 1] = actualWord;
    }

    // 3. Join result array with spaces
    return result.join(" ");
};

// Test
console.log(sortSentence("is2 sentence4 This1 a3")); // Should be: "This is a sentence"
