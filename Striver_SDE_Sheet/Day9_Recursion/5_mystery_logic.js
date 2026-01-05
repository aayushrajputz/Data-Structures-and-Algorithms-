/**
 * Level 1.5: The Mystery Function
 * Goal: Master the 'Pre-Recursive' and 'Post-Recursive' Workspace.
 */

function mystery(n) {
    if (n === 0) return; // BASE CASE: Yahan se u-turn marna hai.

    // LINE A: Yeh kaam stack mein jaate waqt hota hai (Pre-order)
    console.log("Jate waqt (Pushing to Stack):", n);

    mystery(n - 1); // <--- YAHAN BREAK HAI. Function yahan ruk jata hai 
    // aur agle call ke waapas aane ka wait karta hai.

    // LINE B: Yeh kaam stack se nikalte waqt hota hai (Post-order / Backtracking)
    console.log("Wapas aate waqt (Popping from Stack):", n);
}

console.log("--- STARTING THE ARCHITECT'S DRY RUN (N=3) ---");
mystery(3);
