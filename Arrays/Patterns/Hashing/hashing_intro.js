/**
 * HASHING BASICS: The "Magic Notebook" 📖
 * 
 * Problem:
 * Imagine you are in a classroom.
 * I ask: "Roll Number 55 kaun hai?"
 * 
 * Approach 1 (Array / Linear Scan):
 * You go to Student 1, then Student 2, then Student 3... until you find 55.
 * Time: O(N) (Slow) 🐢
 * 
 * Approach 2 (Hashing / Map):
 * You open a "Magic Notebook" (Index Table).
 * You look at page '55'. It directly says "Aayush".
 * Time: O(1) (Instant) ⚡
 */

// --- 1. The Old Way (Array) ---
let classroom = ["Rahul", "Simran", "Anjali", "Aayush"]; // Roll No 0, 1, 2, 3
// Finding "Aayush"? We have to loop.

// --- 2. The New Way (Hash Map) ---
// In JS, we use 'Map' or 'Object'. 'Map' is better for DSA.
let magicNotebook = new Map();

// Storing Data (Key -> Value)
magicNotebook.set(101, "Rahul");
magicNotebook.set(55, "Aayush");
magicNotebook.set(99, "Suresh");

console.log("Classroom:", magicNotebook);

// Retrieval (Instant)
console.log("Who is Roll No 55?", magicNotebook.get(55)); 

// Check Existence
if (magicNotebook.has(99)) {
    console.log("Suresh present hai!");
}
