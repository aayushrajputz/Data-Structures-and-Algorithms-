/**
 * MISSION: SDE-1 @ Razorpay / Amazon
 * TASK: Top K Frequent Elements
 * LOGIC: 
 *   1. Count frequencies using a Map.
 *   2. Use a Min-Heap of size K, comparing by frequency.
 */

const MinHeap = require('./min_heap.js');

function topKFrequent(nums, k) {
    const freqMap = new Map();
    for (let num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Min-Heap based on frequency: smallest frequency at the root
    const minHeap = new MinHeap((a, b) => a.freq - b.freq);

    for (let [val, freq] of freqMap) {
        minHeap.insert({ val, freq });
        if (minHeap.heap.length > k) {
            minHeap.extractMin(); // Frequency filter: remove the smallest one
        }
    }

    // Remaining in heap are our top K
    return minHeap.heap.map(obj => obj.val);
}

// TEST CASES
console.log("Test 1 [1,1,1,2,2,3], k=2 (Expected [1, 2]):", topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log("Test 2 [1], k=1 (Expected [1]):", topKFrequent([1], 1));
