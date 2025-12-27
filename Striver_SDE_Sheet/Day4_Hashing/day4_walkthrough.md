# Striver SDE Sheet - Day 4: Hashing & Slidng Window

Completed 6 critical problems focusing on Hashing, Prefix Sum/XOR, and Sliding Window techniques.

## Problems Solved
1. **Two Sum** [O(N)] - Used Hash Map to find complement in one pass.
2. **4-Sum** [O(N³)] - Extended the 2-pointer approach with two nested loops and duplicate skipping.
3. **Longest Consecutive Sequence** [O(N)] - Used a Hash Set to identify the sequence start and count streaks efficiently.
4. **Largest Subarray with 0 Sum** [O(N)] - Applied Prefix Sum + Hash Map to track repeated sums (indicating a zero-sum gap).
5. **Count Subarrays with XOR K** [O(N)] - Used Prefix XOR + Frequency Map (`Y = XR ^ K`).
6. **Longest Substring Without Repeating Characters** [O(N)] - Implemented Sliding Window with character-index mapping for O(1) jump.

## Key Takeaways
- **Prefix Sum repeating** means the subarray between those two indices sums to 0.
- **Set** search is O(1), making sequence detection linear.
- **Sliding Window** with Map is the gold standard for substring problems.

## Status: Day 4 DONE ✅
Next: Day 5 - Linked Lists!
