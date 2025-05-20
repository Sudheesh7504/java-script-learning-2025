// 1. First even number
let nums = [1, 3, 7, 4, 9];
let firstEven = nums.find((num)=>{
    return num%2===0;
});
console.log(firstEven);

// 2. First word longer than 5 letters
let words = ["cat", "elephant", "dog", "giraffe"];
let frstLongWord = words.find((word)=>{
    return word.length>5;
});
console.log(frstLongWord);

// 3. Find person by name
let peoples = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];

let person = peoples.find((people)=>{
    return people['name']==="Bob";
})
console.log(person);