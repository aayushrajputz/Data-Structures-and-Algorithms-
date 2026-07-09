function findPeak2(matrix) {

    let n = matrix.length;
    let m = matrix[0].length
    let left = 0
    let right = m - 1

    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        let maxRow = 0

        for (i = 0; i < n; i++) {
            if (matrix[i][mid] > matrix[maxRow][mid]) {
                maxRow = i
            }
        }
        let leftVal = (mid > 0) ? matrix[maxRow][mid - 1] : -1
        let rightVal = (mid < m - 1) ? matrix[maxRow][mid + 1] : -1
        if (matrix[maxRow][mid] > leftVal && matrix[maxRow][mid] > rightVal) {
            return [maxRow, mid]
        }
        else if (rightVal > matrix[maxRow][mid]) {
            left = mid + 1
        }
        else {
            right = mid - 1
        }

    }
    return [-1, -1]
}

let matrix = [[10, 20, 15],
[21, 30, 14],
[7, 8, 9]]

console.log(findPeak2(matrix)); // Output: [2, 2] 