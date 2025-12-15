/**
 * Problem: Trapping Rain Water (LeetCode 42)
 * Strategy: Pre-computation (LeftMax & RightMax Arrays)
 */

function trap(height) {
    let n = height.length;
    if (n === 0) return 0;

    let leftMax = new Array(n).fill(0);
    let rightMax = new Array(n).fill(0);

    // Step 1: Fill LeftMax Array
    leftMax[0] = height[0];
    for (let i = 1; i < n; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1]);
    }

    // Step 2: Fill RightMax Array
    rightMax[n - 1] = height[n - 1];
    for (let i = n - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i + 1]);
    }

    // Step 3: Calculate Water
    let totalWater = 0;
    for (let i = 0; i < n; i++) {
        let level = Math.min(leftMax[i], rightMax[i]);
        let water = level - height[i];

        // Safety check (though logic ensures non-negative)
        if (water > 0) {
            totalWater += water;
        }
    }

    return totalWater;
}

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log("Trapped Water:", trap(height));
