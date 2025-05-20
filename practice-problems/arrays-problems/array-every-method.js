// 1. Check if all numbers are positive
let nums = [1, 2, 3, 4];
let isallPositive = nums.every((num)=>{
    return num>0;
})
console.log(isallPositive);

// 2. Check if all strings are non-empty
let words = ["hello", "world", "hi"];
let isallNonEmptyStrings = words.every((word)=>{
    return word!=='';
})
console.log(isallNonEmptyStrings);

// 3. Check if all people are adults (18+)
let peoples2 = [
    { name: "Tom", age: 22 },
    { name: "Jerry", age: 27 },
    { name: "Spike", age: 19 }
  ];

let isallAdults = peoples2.every((people)=>{
    return people['age']>18;
})
console.log(isallAdults);