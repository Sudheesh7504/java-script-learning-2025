//1.doubling all elements in array
let nums = [1, 2, 3, 4];
var dnums = nums.map((num)=>{
    return num*2;
})
console.log(dnums);

//2.convert all words in array into uppercase
let words = ["hello", "world"];
var uppercaseWords = words.map((word)=>{
    return word.toUpperCase();
})
console.table(uppercaseWords);

//3.Square all numbers in an array:
let numbers = [2, 3, 4, 5];
var SquareNums = numbers.map((num)=>{
    return Math.sqrt(num);
})
console.log(SquareNums);

//4.Create an array of objects from an array of numbers:
let nums2 = [1, 2, 3, 4];
var resultArray = nums2.map((num)=>{
    return {number:num,square:Math.sqrt(num)}
})
console.log(resultArray);

//5.Extract first letter of each string
let fruits = ["apple", "banana", "cherry"];
var extractLetters = fruits.map((fruit)=>{
    return fruit[0];
})
console.log(extractLetters);