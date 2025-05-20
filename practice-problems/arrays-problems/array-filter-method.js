//1.Get all even numbers from an array
let nums = [1, 2, 3, 4, 5, 6];
var evenNums = nums.filter((num)=>{
    return num%2===0;
})
console.log(evenNums);

//2.Filter out negative numbers
let nums2 = [-1, 2, -3, 4, -5];
var negNums = nums2.filter((num)=>{
    return num<0;
})
console.log(negNums);

//3.Filter strings with length greater than 3
let words = ["hi", "hello", "world", "a", "there"];
var wordsRes = words.filter((word)=>{
    return word.length>3;
})
console.log(wordsRes);

//4.Get all numbers greater than 10
let nums3 = [5, 12, 8, 21, 14];
let numsRes = nums3.filter((num)=>{
    return num>10;
})
console.log(numsRes);

//5.Find words starting with 'a'
let fruits = ["apple", "banana", "avocado", "grape"];
let filteredFruits = fruits.filter((fruit)=>{
    return fruit.startsWith('a');
})
console.log(filteredFruits);