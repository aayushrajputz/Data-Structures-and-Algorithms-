/**
 * Problem: LRU Cache (LeetCode 146)
 * Pattern: Hash Map + Doubly Linked List
 * Complexity: O(1) for both get and put
 */

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map(); // key -> Node

        // Dummy Head and Tail to avoid null checks
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    // --- Helper Methods ---

    // Add node right after head (Most Recent)
    _add(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    // Remove an existing node from the list
    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    // --- Core Operations ---

    get(key) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            this._remove(node);  // Nikalo
            this._add(node);     // Front pe dalo (Update recency)
            return node.value;
        }
        return -1;
    }

    put(key, value) {
        if (this.map.has(key)) {
            this._remove(this.map.get(key)); // Purana version delete karo
        }

        const newNode = new Node(key, value);
        this.map.set(key, newNode);
        this._add(newNode);

        if (this.map.size > this.capacity) {
            // EVICT: Remove Least Recently Used (node before tail)
            const lru = this.tail.prev;
            this._remove(lru);
            this.map.delete(lru.key);
            console.log(`Evicted: ${lru.key}`);
        }
    }
}

// --- TEST CASES ---
const cache = new LRUCache(2);
cache.put(1, 10);
cache.put(2, 20);
console.log("Get 1:", cache.get(1)); // 10, and moves 1 to front
cache.put(3, 30);                // Evicts 2 (LRU)
console.log("Get 2 (Expected -1):", cache.get(2));
console.log("Get 3:", cache.get(3)); // 30
