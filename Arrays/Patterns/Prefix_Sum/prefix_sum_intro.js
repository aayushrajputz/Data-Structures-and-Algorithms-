/**
 * PATTERN: PREFIX SUM & SUFFIX SUM 📊
 * 
 * Ye wahi pattern hai jo humne "Trapping Rain Water" mein use kiya.
 * Wahan humne "Prefix MAX" nikala tha, yahan hum "Prefix SUM" samjhenge.
 * 
 * --- 1. Prefix Sum (Aage Badhna) ---
 * Goal: Har point pe batao "Shuru se leke ab tak ka Total kya hai?"
 * Array: [1, 2, 3, 4]
 * Prefix: [1, 3, 6, 10]
 * 
 * Logic:
 * prefix[i] = nums[i] + prefix[i-1] (Mera value + Pichla Total)
 * 
 * --- 2. Suffix Sum (Peeche Se Aana) ---
 * Goal: Har point pe batao "End se leke ab tak ka Total kya hai?"
 * Array: [1, 2, 3, 4]
 * Suffix: [10, 9, 7, 4]
 * 
 * Logic:
 * suffix[i] = nums[i] + suffix[i+1] (Mera value + Agla Total)
 * 
 * --- Why is this useful? ---
 * 1. Range Sum Queries (Index L se R tak ka sum O(1) mein).
 * 2. Product of Array Except Self.
 * 3. Trapping Rain Water (Prefix Max / Suffix Max).
 */

// Example: Prefix Sum Implementation
function prefixSumDemo(arr) {
    let n = arr.length;
    let prefix = new Array(n).fill(0);

    prefix[0] = arr[0]
    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i] + arr[i]
    }
    return prefix
}

console.log("Original:", [1, 2, 3, 4]);
console.log("Prefix Sum:", prefixSumDemo([1, 2, 3, 4]));
