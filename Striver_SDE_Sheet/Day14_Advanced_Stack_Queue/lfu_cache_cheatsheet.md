# 🏛️ LFU Cache: The $O(1)$ Grandmaster Blueprint 🚀

**Aayush Rajput's Elite Revision Guide**

## 🖊️ The Concept (The "Loyalty Building" Analogy)
Imagine a building where each floor represents a **Frequency** (How many times an item was used).
- **Floor 1:** Used 1 time.
- **Floor 10:** Used 10 times.
- Each floor has a **Priority Line (Doubly Linked List)** where the people at the back (Tail) are the ones who haven't been used in a long time (LRU).

---

## 🏗️ The Data Structures (The Skeleton)
To achieve **$O(1)$** performance, we use a **Dual-Map Strategy**:

1.  **`keyToNode` (Map):**
    - Like a Receptionist. You give the `Key`, she tells you exactly where the `Node` is.
    - *Utility:* Instant access to data and its current frequency.

2.  **`freqToList` (Map of Doubly Linked Lists):**
    - Like the "Floors" of the building.
    - Each `freq` maps to a `DoublyLinkedList`.
    - *Utility:* Helps us find the Least Recently Used (LRU) person on a specific floor.

3.  **`minFreq` (Integer):**
    - Tracks the **Lowest Floor** that currently has anyone on it.
    - *Utility:* When the cache is full, we go straight to this floor to FIRE/EVICT the person at the back (Tail).

---

## ⚡ The Logic Flow (The Muscle)

### 1. `get(key)` -> Promotion 🚀
- **Step 1:** Find the node in `keyToNode`. If not found, return -1.
- **Step 2:** **Move the Node UP:**
    - Remove it from its current Floor (List at `node.freq`).
    - If that floor becomes empty and it was the `minFreq` floor, do `minFreq++`.
    - Increase `node.freq`.
    - Add it to the NEW floor (List at `node.freq`).

### 2. `put(key, value)` -> Entry or Update 👤🚪
- **Case A: Key already exists:**
    - Update the `value`.
    - Call the same Promotion logic as `get()`.
- **Case B: New Key + Cache Full:**
    - **Eviction:** Go to `freqToList.get(minFreq)`.
    - Remove the **Tail Node** (The least frequent AND least recently used).
    - Delete it from `keyToNode`.
- **Case C: New Admission:**
    - Create a new Node with `freq = 1`.
    - Add it to Floor 1 (`freqToList.get(1)`).
    - **Reset `minFreq = 1`** (Because a new person always starts at the bottom).

---

## 🏆 Interviewer's "Gotcha" Questions
- **Q:** Why use a Doubly Linked List?
- **A:** To add and remove nodes in $O(1)$ time. A simple array would take $O(N)$ to shift elements.
- **Q:** How do you handle Ties (same frequency)?
- **A:** We use the LRU (Least Recently Used) policy within that frequency tier. That's why each floor is an LRU List.

---

### 🦁 Final Verdict
**LRU is about TIME. LFU is about RESPECT (Frequency) and TIME.**

*Status: Day 14 Conqueror - Aayush Rajput* 🏁⚔️🏗️🏹🏆
