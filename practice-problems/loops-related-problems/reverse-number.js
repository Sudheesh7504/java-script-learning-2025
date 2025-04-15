function reverseNumber(n){
    let revInt = String(n).split("").reverse().join("");
    return Number(revInt);

}
console.log(reverseNumber(123));