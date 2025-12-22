/**
 * LEETCODE 1482: Minimum Number of Days to Make m Bouquets
 * 
 * Goal: Find the minimum days 'd' to make 'm' bouquets of 'k' ADJACENT flowers each.
 * 
 * LOGIC:
 * 1. Range of days: low = min(bloomDay), high = max(bloomDay)
 * 2. If m * k > bloomDay.length, return -1 (Impossible).
 * 3. Binary Search on the range of days.
 * 4. Helper function canMake(mid):
 *      - Count adjacent flowers that bloom on or before day 'mid'.
 *      - If count reaches 'k', increment bouquets count and reset count.
 *      - Return true if total bouquets >= m.
 */

function minDays(bloomDay, m, k) {
    if (m * k > bloomDay.length) return -1;

    let low = Math.min(...bloomDay);
    let high = Math.max(...bloomDay);
    let ans = high;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (canMake(bloomDay, m, k, mid)) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return ans;
}

function canMake(bloomDay, m, k, day) {
    let bouquets = 0;
    let flowers = 0;

    for (let d of bloomDay) {
        if (d <= day) {
            flowers++;
            if (flowers === k) {
                bouquets++;
                flowers = 0;
            }
        } else {
            flowers = 0;
        }
    }
    return bouquets >= m;
}

// Test Cases
console.log("Min Days (Expected 3):", minDays([1, 10, 3, 10, 2], 3, 1));
console.log("Min Days (Expected -1):", minDays([1, 10, 3, 10, 2], 3, 2));
console.log("Min Days (Expected 12):", minDays([7, 7, 7, 7, 12, 7, 7], 2, 3));
