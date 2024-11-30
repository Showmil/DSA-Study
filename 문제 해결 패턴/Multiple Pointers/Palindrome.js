function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false; // 팰린드롬이 아님
        }
        left++;
        right--;
    }
    return true; // 팰린드롬
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello")); // false