/**
 * Problem: Book Allocation (Amazon / Google Special)
 * Goal: Allocate books such that the maximum pages assigned to a student is minimized.
 * 
 * Rules:
 * 1. Each student gets at least one book.
 * 2. Books are allocated in a contiguous manner.
 */

function isPossible(books, m, maxPages) {
    let studentCount = 1;
    let pagesSum = 0;

    for (let i = 0; i < books.length; i++) {
        if (pagesSum + books[i] <= maxPages) {
            // Can give this book to the current student
            pagesSum += books[i];
        } else {
            // Assign to next student
            studentCount++;
            if (studentCount > m || books[i] > maxPages) {
                return false;
            }
            pagesSum = books[i];
        }
    }
    return true;
}

function allocateBooks(books, m) {
    // Edge Case: If students > books, not possible
    if (m > books.length) return -1;

    // Range Selection
    // low: Ship logic, must handle the biggest book
    let low = Math.max(...books);
    // high: Worst case, one student reads all books
    let high = books.reduce((a, b) => a + b, 0);
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (isPossible(books, m, mid)) {
            // mid capacity is enough, but can we do better? (lower it)
            ans = mid;
            high = mid - 1;
        } else {
            // mid capacity is too low, increase it
            low = mid + 1;
        }
    }
    return ans;
}

// Test Case:
const books = [12, 34, 67, 90];
const students = 2;
console.log("Minimum of Max Pages:", allocateBooks(books, students));
// Logic: If maxPages is 113, Stud1: (12+34+67=113), Stud2: (90). Max is 113. ✅
