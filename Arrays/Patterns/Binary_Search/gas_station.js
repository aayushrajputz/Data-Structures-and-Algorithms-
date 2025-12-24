/**
 * Problem: Minimize Maximum Distance to Gas Stations
 * You have 'k' new stations to add.
 * Pattern: Binary Search on Answer (Minimize the Maximum)
 */

function isPossible(stations, k, mid) {
    let newStationsNeeded = 0;

    for (let i = 0; i < stations.length - 1; i++) {
        let gap = stations[i + 1] - stations[i];

        // Count how many stations are needed to make every gap <= mid
        // Using while loop as per user's logic
        if (gap > mid) {
            newStationsNeeded += Math.floor((gap - 1) / mid);
        }
    }
    return newStationsNeeded <= k;
}

// Main logic (Binary Search)
function minMaxDist(stations, k) {
    stations.sort((a, b) => a - b);
    let low = 0; // Minimum possible gap
    let high = stations[stations.length - 1] - stations[0]; // Maximum possible gap
    let res = high;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        if (mid === 0) {
            low = 1;
            continue;
        }

        if (isPossible(stations, k, mid)) {
            res = mid;
            high = mid - 1; // Try to minimize
        } else {
            low = mid + 1; // Increase the allowed gap
        }
    }
    return res;
}

const stationsArr = [1, 2, 4, 8, 9];
const kValue = 3;
console.log("Minimized Max Distance:", minMaxDist(stationsArr, kValue));