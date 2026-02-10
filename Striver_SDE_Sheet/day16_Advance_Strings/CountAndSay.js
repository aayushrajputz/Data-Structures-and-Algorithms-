function countAndSay(n) {
    if (n === 1) return "1";


    let s = countAndSay(n - 1);
    let res = ""

    for (let i = 0; i < s.length; i++) {
        let count = 1;

        while (i + 1 < s.length && s[i] === s[i + 1]) {
            count++
            i++
        }
        res += count.toString() + s[i];
    }
    return res;
}


for (let i = 1; i <= 6; i++) {
    console.log(`n=${i}: ${countAndSay(i)}`);
}