/**
 * Problem: LFU Cache (Least Frequently Used)
 * Pattern: O(1) Time Complexity using HashMaps + Doubly Linked Lists
 */

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.freq = 1;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
        this.listSize = 0; // Renamed to avoid confusion with Cache size
    }

    addNode(node) {
        let temp = this.head.next;
        node.next = temp;
        node.prev = this.head;
        this.head.next = node;
        temp.prev = node;
        this.listSize++;
    }

    removeNode(node) {
        let prevNode = node.prev;
        let nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
        this.listSize--;
    }

    removeTail() {
        if (this.listSize > 0) {
            let node = this.tail.prev;
            this.removeNode(node);
            return node;
        }
        return null;
    }
}

class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.currentSize = 0;
        this.minFreq = 0;
        this.keyToNode = new Map();
        this.freqToList = new Map();
    }

    updateFreq(node) {
        let oldFreq = node.freq;
        let oldList = this.freqToList.get(oldFreq);
        oldList.removeNode(node);

        // If the list at minFreq becomes empty, increment minFreq
        if (oldFreq === this.minFreq && oldList.listSize === 0) {
            this.minFreq++;
        }

        node.freq++;
        let newFreq = node.freq;
        if (!this.freqToList.has(newFreq)) {
            this.freqToList.set(newFreq, new DoublyLinkedList());
        }
        this.freqToList.get(newFreq).addNode(node);
    }

    get(key) {
        if (!this.keyToNode.has(key)) return -1;
        let node = this.keyToNode.get(key);
        this.updateFreq(node);
        return node.value;
    }

    put(key, value) {
        if (this.capacity === 0) return;

        if (this.keyToNode.has(key)) {
            let node = this.keyToNode.get(key);
            node.value = value;
            this.updateFreq(node);
        } else {
            if (this.currentSize === this.capacity) {
                // EVICTION: Remove the LRU from the minFreq list
                let minFreqList = this.freqToList.get(this.minFreq);
                let nodeToEvict = minFreqList.removeTail();
                this.keyToNode.delete(nodeToEvict.key);
                this.currentSize--;
            }

            let newNode = new Node(key, value);
            this.keyToNode.set(key, newNode);

            if (!this.freqToList.has(1)) {
                this.freqToList.set(1, new DoublyLinkedList());
            }
            this.freqToList.get(1).addNode(newNode);
            this.minFreq = 1;
            this.currentSize++;
        }
    }
}

// --- LOCAL TESTING ---
const cache = new LFUCache(2);
cache.put(1, 10);
cache.put(2, 20);
console.log("Get 1: ", cache.get(1)); // Should be 10, Freq becomes 2
cache.put(3, 30); // Should evict Key 2 (Freq 1)
console.log("Get 2 (Evicted?): ", cache.get(2)); // Should be -1
console.log("Get 3: ", cache.get(3)); // Should be 30
