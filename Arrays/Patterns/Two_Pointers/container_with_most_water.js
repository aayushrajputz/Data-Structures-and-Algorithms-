/*
 Problem: Container With Most Water (LeetCode 11) - Medium 💧
 
 Pattern: Two Pointers (Start-End)
 
 Challenge:
 You are given an integer array height of length n. 
 There are n vertical lines drawn.
 Find two lines that together with the x-axis form a container, such that the container contains the most water.
 Return the maximum amount of water a container can store.
 
 Logic Hint:
 - Water Area = (Distance between lines) * Min(Height[L], Height[R])
 - Start pointers at both ends (0 and n-1).
 - Move the pointer that points to the SMALLER line (Why? Because that line is the bottleneck).
 
 Example:
 Input: [1,8,6,2,5,4,8,3,7]
 Output: 49 (Lines at index 1 (8) and index 8 (7). Area = 7 * 7 = 49)
 */

function maxArea(height) {
    let start = 0
    let end = height.length - 1
    let maxWater = 0;

    while (start < end) {
        let h = Math.min(height[start], height[end]);
        let w = end - start;
        let area = h * w;
        if (area > maxWater) {
            maxWater = area
        }
        if (height[start] > height[end]) {
            end--;
        } else {
            start++
        }
    }
    return maxWater;

}

// Test Case
console.log("Max Water:", maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
