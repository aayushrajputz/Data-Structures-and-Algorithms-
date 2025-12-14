/**
 * Problem: Container With Most Water
 * Logic: Two Pointers (Start, End) with Greedy movement.
 */

function maxArea(height) {
    let start = 0;
    let end = height.length - 1;
    let maxWater = 0; // Local variable to store max area

    while (start < end) {
        // Calculate current area
        let h = Math.min(height[start], height[end]);
        let w = end - start;
        let area = h * w;

        // Update High Score
        if (area > maxWater) {
            maxWater = area;
        }

        // Decision: Move the shorter wall
        // (Because width is decreasing, we need TALLER walls to get more area)
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }
    return maxWater;
}

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log("Max Water:", maxArea(height));
