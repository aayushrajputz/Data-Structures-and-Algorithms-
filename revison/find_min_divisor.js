function findmin(arr, threshold) {
    let low = 1;
    let high = Math.max(...arr);
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (isPossible(arr, mid, threshold)) {
            high = mid - 1;
            ans = mid;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

function isPossible(arr, mid, threshold) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += Math.ceil(arr[i] / mid);
    }
    return sum <= threshold
}


console.log(findmin([1, 2, 5, 9], 6))
console.log(findmin([44, 22, 33, 11, 1], 5)) 
