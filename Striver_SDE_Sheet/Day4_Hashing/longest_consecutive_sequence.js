/**
 * LeetCode 128: Longest Consecutive Sequence
 * Approach: Hash Set (O(N))
 * Time Complexity: O(N)
 * Space Complexity: O(N)
 */
var longestConsecutive = function (nums) {
    // Edge Case: Khali array ka streak 0 hota hai
    if (nums.length === 0) return 0;

    // 1. Saare numbers ko Set mein daal do (unique + quick search)
    const set = new Set(nums);
    let longest = 0; // Sabse lambi ginti track karne ke liye

    // 2. Pure Set par ghoomna shuru karo
    for (let num of set) {

        // 3. MASTER STROKE: Kya ye sequence ka pehla number hai?
        // Agar Set mein (num - 1) NAHI hai, matlab num se ginti shuru ho sakti hai.
        if (!set.has(num - 1)) {

            let currentNum = num;
            let currentStreak = 1; // Kam se kam 1 length toh hai hi

            // 4. Jab tak agla number mil raha hai, badhte jao
            // Check (num + 1), (num + 2), etc.
            while (set.has(currentNum + 1)) {
                currentNum += 1;
                currentStreak += 1;
            }

            // 5. Update Max Streak
            longest = Math.max(longest, currentStreak);
        }

        // Agar (num - 1) Set mein THA, matlab hum shuruat par nahi hain.
        // Humne ise ignore kar diya kyunki jab shuruat wala number aayega (Step 3 me),
        // tab ye wala number automatically 'while' loop mein gina jayega.
    }

    return longest;
};

console.log("Output for [100, 4, 200, 1, 3, 2]:", longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log("Output for [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]:", longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]));