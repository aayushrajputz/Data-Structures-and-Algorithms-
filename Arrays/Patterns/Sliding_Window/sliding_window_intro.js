/**
 * PATTERN: SLIDING WINDOW 🪟
 * 
 * Concept:
 * Imagine ek "Khidki" (Window) jo array ke upar sarak rahi hai.
 * Bajaye baar-baar naya array banane ke (Nested Loops O(N^2)),
 * hum bas window ko slide karte hain (O(N)).
 * 
 * --- Types of Windows ---
 * 
 * 1. FIXED SIZE WINDOW 📏
 *    - Example: "Max sum of subarray of size 3".
 *    - Logic: 
 *      - Pehle 3 elements ka sum nikalo.
 *      - Ek step aage badho: 
 *        - `Naya` element add karo (Right side).
 *        - `Purana` element remove karo (Left side).
 * 
 * 2. VARIABLE SIZE WINDOW 📐
 *    - Example: "Longest substring without repeating characters".
 *    - Logic:
 *      - Window ko expand karte raho (Right++).
 *      - Agar condition tooti (e.g., duplicate aaya),
 *      - Window ko shrink karo (Left++) jab tak condition theek na ho.
 * 
 * --- GENERAL TEMPLATE (Variable Window) ---
 */

function slidingWindowTemplate(nums) {
    let left = 0; 
    let right = 0;
    let n = nums.length;
    
    // Result tracking
    let globalMax = 0;
    
    // Status tracking (e.g., Current Sum, Map, Set)
    let currentWindowStat = 0;

    while (right < n) {
        // 1. EXPAND phase: Add element at 'right'
        let rightElement = nums[right];
        // update(currentWindowStat, rightElement);
        
        // 2. SHRINK phase (Condition Check): If invalid, shrink from 'left'
        while (/* condition is invalid */ false) {
            let leftElement = nums[left];
            // remove(currentWindowStat, leftElement);
            left++;
        }

        // 3. CALCULATION phase: Update global result
        // globalMax = Math.max(globalMax, right - left + 1);

        // Move forward
        right++;
    }
    
    return globalMax;
}
