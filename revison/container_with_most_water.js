function containMostWater(height) {
    let left = 0
    let right = height.length - 1;

    let maxWater = 0


    while (left < right) {

        let h = Math.min(height[left], height[right])
        let w = right - left
        let area = h * w
        if (maxWater < area) {
            maxWater = area
        }
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return maxWater

}
console.log(containMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]))