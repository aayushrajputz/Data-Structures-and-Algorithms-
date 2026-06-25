var validPalindrome = function (s) {
    function isPalindrome(str, i, j) {
        while (i < j) {
            if (str[i] !== str[j]) return false
            i++
            j--
        }
        return true
    }
    let left = 0
    let right = s.length - 1

    while (left < right) {
        if (s[left] === s[right]) {
            left++
            right--
        } else {
            return isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
        }
    }
    return true
}

console.log(validPalindrome("aba")); // true
console.log(validPalindrome("abca")); // false