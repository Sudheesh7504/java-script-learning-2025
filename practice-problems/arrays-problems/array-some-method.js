// 1. Check if any number is greater than 10
let nums = [3, 7, 11, 4];
let isNumsGreaterThan10 = nums.some((num)=>{
    return num>10;
})
console.log(isNumsGreaterThan10);

// 2. Check if any string contains the word "hello"
let messages = ["hi", "hey", "hello world", "yo"];
let isContainsHelloWorld = messages.some((msg)=>{
    return msg.includes(("hello"));
})
console.log(isContainsHelloWorld);

// 3. Check if any person is under 18
let peoples = [
    { name: "Tom", age: 22 },
    { name: "Jerry", age: 17 },
    { name: "Spike", age: 19 }
  ];

let isUnder18 = peoples.some((people)=>{
    return people['age']>=18;
})
console.log(isUnder18);