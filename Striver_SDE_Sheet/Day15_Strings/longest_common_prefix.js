function longestCommonPrefix(strs) {
    if (!strs || strs.length === 0) return "";

    strs.sort();

    let s1 = strs[0]
    let s2 = strs[strs.length - 1]

    let idx = 0;

    while (idx < s1.length && idx < s2.length) {
        if (s1[idx] === s2[idx]) {
            idx++
        } else {
            break;
        }
    }
    return s1.substring(0, idx);
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));