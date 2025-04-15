function isPalindrome(str){
    let revStr = str.split("").reverse().join("");
    if(str === revStr){
        return `given string: ${str} is palindrome`;
    } else {
        return `given string: ${str} is not palindrome`;
    }

}

console.log(isPalindrome("sudeesh"));
console.log(isPalindrome("dad"));