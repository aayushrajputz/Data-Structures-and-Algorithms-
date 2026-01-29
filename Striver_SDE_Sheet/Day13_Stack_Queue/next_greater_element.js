/**
 * Problem: Next Greater Element I (LeetCode 496)
 * Pattern: Monotonic Stack (Decreasing Stack)
 * Time Complexity: O(N) - Each element is pushed and popped at most once.
 */

const nextGreaterElement = function (nums1, nums2) {
    const stack = [];
    const map = new Map(); // Stores { value: nextGreater }

    // Logic: Process nums2 from Right to Left
    // Why? Because we need to know what's on the right to find the greater element.
    for (let i = nums2.length - 1; i >= 0; i--) {
        const current = nums2[i];

        // 1. Maintain Monotonicity: Remove smaller elements from stack
        // "Tu mujhse chota hai, toh tu mere kisi kaam ka nahi" - Current Element
        while (stack.length > 0 && stack[stack.length - 1] <= current) {
            stack.pop();
        }

        // 2. Identify Result
        if (stack.length === 0) {
            map.set(current, -1); // No greater element on right
        } else {
            map.set(current, stack[stack.length - 1]); // Top is the nearest greater
        }

        // 3. Push Current to help elements on the left
        stack.push(current);
    }

    // Map the results for nums1
    return nums1.map(num => map.get(num));
};

// --- TEST CASES ---
console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2])); // Expected: [-1, 3, -1]
console.log(nextGreaterElement([2, 4], [1, 2, 3, 4]));    // Expected: [3, -1]
