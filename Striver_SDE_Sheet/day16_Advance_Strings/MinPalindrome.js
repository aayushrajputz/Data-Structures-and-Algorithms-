function computeLPS(s) {
    let n = s.length;
    let lps = new Array(n).fill(0);
    let len = 0;

    for (let i = 1; i < n;) {
        if (s[i] === s[len]) {
            len++
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++
            }
        }
    }
    return lps[n - 1];
}
function solve(s) {
    let rev = s.split('').reverse().join('');
    let concat = s + "#" + rev;
    let lastLPS = computeLPS(concat);
    let ans = s.length - lastLPS;
    console.log("TITAN MOOD! Minimum chars to add: " + ans);
    return ans;
}
// BATTLE TEST
solve("AACECAAAA");