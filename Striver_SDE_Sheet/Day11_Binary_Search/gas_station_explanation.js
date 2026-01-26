/**
 * PROBLEM: Minimize Maximum Distance to Gas Stations (GFG/Amazon)
 * 
 * MISSION: Humein 'k' naye gas stations lagane hain taaki har station ke 
 * beech ka maximum distance 'Minimum' ho sake.
 * 
 * APPROACH: Binary Search on Answer (Decimal Precision)
 */

class Solution {
    /**
     * countNeeded(stations, dist)
     * Iska kaam hai check karna: "Agar hum har gap ko 'dist' se chota/equal rakhna chahein,
     * toh humein kitne NAYE stations lagane padenge?"
     */
    countNeeded(stations, dist) {
        let count = 0;
        for (let i = 0; i < stations.length - 1; i++) {
            let gap = stations[i + 1] - stations[i];

            // Logic: Agar gap 10 hai aur dist 2, toh humein 5 segments chahiye.
            // 5 segments banane ke liye beech mein 4 stations lagane padenge.
            // Isliye: (Segments - 1)
            let stationsInBetween = Math.floor(gap / dist);

            // TITAN CHECK: Agar gap poora divide ho raha hai (e.g. 10/2 = 5)
            // Toh hume 1 station kam chahiye (4), warna jitne segments bane utne hi stations (floor handle kar leta hai).
            if (gap / dist === stationsInBetween) {
                count += (stationsInBetween - 1);
            } else {
                count += stationsInBetween;
            }
        }
        return count;
    }

    /**
     * minMaxDist(stations, k)
     * Main function: Binary Search on the possible distance values.
     */
    minMaxDist(stations, k) {
        let n = stations.length;
        let low = 0; // Sabse chota possible distance
        let high = 0; // Sabse bada initial gap

        // Step 1: Max gap dhoondo (yehi hamari upper limit check hogi)
        for (let i = 0; i < n - 1; i++) {
            high = Math.max(high, stations[i + 1] - stations[i]);
        }

        // Step 2: Binary Search on Decimals
        // Integers mein low <= high karte hain, par decimals mein precision chahiye.
        // 100 iterations humein 10^-12 precision de deti hain (GFG ke liye best hai).
        for (let iter = 0; iter < 100; iter++) {
            let mid = (low + high) / 2.0;

            // Step 3: Check validator
            if (this.countNeeded(stations, mid) <= k) {
                // Agar k stations mein kaam chal gaya, toh distance aur kam karke dekho (Minimize)
                high = mid;
            } else {
                // Agar stations kam pad gaye, toh distance badhana padega.
                low = mid;
            }
        }

        // Return 'high' as it holds the minimum possible maximum distance.
        return high;
    }
}

// Visual Example:
// Stations: [1, 10], k: 2
// Initial gap: 9.
// If guess dist = 3: Need (9/3 - 1) = 2 stations.
// Stations will be at: [1, 4, 7, 10]. All gaps are 3. Correct! ✅
