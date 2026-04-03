function Palindrome(str){
    const reversed = str.split("").reverse().join("")
    return str === reversed
}

console.log(Palindrome("lvk"))