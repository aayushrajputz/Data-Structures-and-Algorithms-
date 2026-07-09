function findPeakElement(arr) {
    let n = arr.length;

    let left = 0
    let right = n - 1

    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2)
        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1
        } else {
            right = mid
        }
    }

    return left;
}

console.log(findPeakElement([1, 2, 3, 1]));       // 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // 5
console.log(findPeakElement([1]));                 // 0
