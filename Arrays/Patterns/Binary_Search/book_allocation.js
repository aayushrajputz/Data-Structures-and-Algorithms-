/**
 * Problem: Book Allocation / Split Array Largest Sum (LeetCode 410)
 * Pattern: Binary Search on Answer (Minimize the Maximum) 📚
 * 
 * Logic:
 * 1. Range: low = max(books), high = sum(books)
 * 2. Helper: can we distribute books such that no student gets more than 'mid' pages?
 * 3. Binary Search for the SMALLEST 'mid' that works.
 */

function isPossible(books, m, maxLimit) {
    let studentCount = 1;
    let currentPages = 0;

    for (let i = 0; i < books.length; i++) {
        // If a single book is larger than our limit, it's impossible
        if (books[i] > maxLimit) return false;

        if (currentPages + books[i] <= maxLimit) {
            // Keep adding to current student
            currentPages += books[i];
        } else {
            // Assign to next student
            studentCount++;
            currentPages = books[i];

            // If we exceeded the number of students allowed
            if (studentCount > m) {
                return false;
            }
        }
    }
    return true;
}

function findPages(books, m) {
    // If students are more than books, impossible to give each at least one
    if (m > books.length) return -1;

    // Search Space
    let low = Math.max(...books);
    let high = books.reduce((a, b) => a + b, 0);
    let res = -1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (isPossible(books, m, mid)) {
            // If it's possible to allocate with 'mid' as max limit
            res = mid;
            // Try to find a smaller maximum (Minimize)
            high = mid - 1;
        } else {
            // 'mid' is too small, need to increase the limit
            low = mid + 1;
        }
    }
    return res;
}

// Test Case
const booksArr = [12, 34, 67, 90];
const students = 2;
console.log("Minimum of maximum pages:", findPages(booksArr, students));
// Expected: 113 (Student 1: 12+34+67=113, Student 2: 90)

const books2 = [25, 46, 28, 49, 24];
const m2 = 4;
console.log("Min of Max pages (Case 2):", findPages(books2, m2));
// Expected: 71
