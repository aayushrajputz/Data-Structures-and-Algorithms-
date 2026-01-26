/**
 * MISSION: SDE-1 @ Razorpay / Amazon
 * TASK: Kth Largest Element using Min-Heap
 * LOGIC: Maintain a Min-Heap of size K.
 */

const MinHeap = require('./min_heap.js'); // Assuming we adjust min_heap.js for export

function findKthLargest(nums, k) {
    const minHeap = new MinHeap();

    for (let i = 0; i < nums.length; i++) {
        if (minHeap.heap.length < k) {
            minHeap.insert(nums[i]);
        } else if (nums[i] > minHeap.peek()) {
            minHeap.extractMin();
            minHeap.insert(nums[i]);
        }
    }

    return minHeap.peek();
}

// TEST CASE
const arr = [3, 2, 3, 1, 2, 4, 5, 5, 6];
const k = 4;
console.log(`${k}th Largest Element is:`, findKthLargest(arr, k));
// Expected Output: 4
