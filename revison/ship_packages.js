function canShip(weights, days, capacity) {
    let daysNeeded = 1;
    let currLoad = 0

    for (let weight of weights) {
        if (currLoad + weight > capacity) {
            daysNeeded++
            currLoad = weight
        } else {
            currLoad += weight;
        }
    }
    return daysNeeded <= days
}

function minCap(weights, days) {
    let low = Math.max(...weights)
    let high = weights.reduce((a, b) => a + b, 0)

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)

        if (canShip(weights, days, mid)) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return low
}

console.log(minCap([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
console.log(minCap([3, 2, 2, 4, 1, 4], 3));
console.log(minCap([1, 2, 3, 1, 1], 4));