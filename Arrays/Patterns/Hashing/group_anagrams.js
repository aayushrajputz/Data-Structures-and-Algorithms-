/**
 * Problem: Group Anagrams (LeetCode 49)
 * Goal: Group strings that are anagrams of each other.
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * Output: [ ["eat", "tea", "ate"], ["tan", "nat"], ["bat"] ]
 * 
 * Logic:
 * Anagrams ki khasiyat kya hoti hai?
 * Agar hum unhe SORT karein, to wo EXACT SAME dikhte hain.
 * "eat" -> "aet"
 * "tea" -> "aet"
 * "ate" -> "aet"
 * 
 * Strategy (Sorting as Key):
 * 1. Ek Map banao.
 * 2. Har word ko uthao, usse SORT karo. (e.g., "eat" -> "aet").
 * 3. Map mein check karo: "Kya 'aet' key pehle se hai?"
 *    - YES: Uss list mein original word ("eat") push kar do.
 *    - NO: Nayi list banao.
 * 
 * Map Structure:
 * {
 *   "aet": ["eat", "tea", "ate"],
 *   "ant": ["tan", "nat"],
 *   "abt": ["bat"]
 * }
 */

function groupAnagrams(strs) {
    let map = new Map();
    for (let words of strs) {
        let key = words.split("").sort().join("");
        if (map.has(key)) {
            map.get(key).push(words);
        }
        else {
            map.set(key, [words]);
        }
    }
    return Array.from(map.values());
}

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
