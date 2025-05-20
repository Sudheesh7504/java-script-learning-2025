// 1. Sum all numbers
let nums = [5, 10, 15, 20];
let sum = nums.reduce((acc,curr)=>{
    return acc+curr;
},0)
console.log(sum);

// 2. Find maximum number
let numbers = [3, 17, 8, 25, 4];
let maxNumber = numbers.reduce((acc,curr)=>{
    return curr>acc ? curr : acc;
    
},numbers[0]);
console.log(maxNumber);

// 3. Join strings into a sentence
let words = ["JavaScript", "is", "fun"];
let sentence = words.reduce((acc,curr)=>{
    return acc+" "+curr;
},"")
console.log(sentence);

// 4. Count frequency of elements
let chars = ["a", "b", "a", "c", "b", "a"];
let freq = chars.reduce((acc,char)=>{
    acc[char] = (acc[char] || 0)+1;
    return acc;
},{})
console.log(freq)

// 5. Group people by age
let peoples = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 }
  ];

let people = peoples.reduce((acc,people)=>{
   if(!acc[people['age']]){
        acc[people['age']] = [];
    }
    acc[people['age']].push(people)
    return acc;
},{})
console.log(people);

//6.Group Words by Length
let words2 = ["hi", "sun", "day", "moon", "star", "sky"];
let groupedWordsbyLen = words2.reduce((acc,word)=>{
    if(!acc[word.length]){
        acc[word.length]=[];
    }
    acc[word.length].push(word);
    return acc;
},{})
console.log(groupedWordsbyLen);

//7.Count Names by First Letter
let names = ["Alice", "Arnold", "Bob", "Charlie", "David", "Daniel"];
let groupedNamesbyFirstletter = names.reduce((acc,name)=>{
    acc[name[0]] = (acc[name[0]] || 0)+1;
    return acc;

},{})
console.log(groupedNamesbyFirstletter);

//8.Group Numbers by Even or Odd
let numbers2 = [1, 2, 3, 4, 5, 6, 7];
let groupedNumbers = numbers2.reduce((acc,curr)=>{
    let key = curr%2===0 ? 'Even' : 'Odd';
    if(!acc[key]){
        acc[key] = [];
    }
    acc[key].push(curr);
    return acc;
},{})
console.log(groupedNumbers);

//9.Find Longest Word
let animals = ["cat", "giraffe", "tiger", "hippopotamus", "lion"];
let longestAnimal = animals.reduce((acc,curr)=>{
    return curr.length >acc.length ? curr : acc;
},'')
console.log(longestAnimal);

//10.Combine Scores by Subject
let scores = [
    { subject: "Math", score: 80 },
    { subject: "English", score: 70 },
    { subject: "Math", score: 90 },
    { subject: "English", score: 85 }
  ];

let groupedSubjectsScore = scores.reduce((acc,curr)=>{
   acc[curr['subject']] = (acc[curr['subject']] || 0)+curr.score;
   return acc;
},{})
console.log(groupedSubjectsScore);

//11.Group Employees by Department
let employees = [
    { name: "Alice", dept: "HR" },
    { name: "Bob", dept: "IT" },
    { name: "Charlie", dept: "HR" },
    { name: "David", dept: "Finance" }
  ];

let groupedEmps = employees.reduce((acc,emp)=>{
    if(!(acc[emp['dept']])){
        acc[emp['dept']] = [];
    }
    acc[emp['dept']].push(emp['name']);
    return acc;
}, {})
console.log(groupedEmps);

//12.Find Highest Scoring Student
let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 88 }
  ];

let highestScoredStudent = students.reduce((acc,curr)=>{
    return curr['score']>acc['score'] ? curr : acc;

},{})
console.log(highestScoredStudent)

//13.Count Vowels in a String
let str = "javascript is powerful";
let vowelsFrequency = str.split('').reduce((acc,curr)=>{
    let vowels = "aeiouAEIOU";
    if(vowels.includes(curr)){
        acc[curr] = (acc[curr] || 0)+1;
    }
    return acc;
},{})
console.log(vowelsFrequency);

//14.Filter and Double Positive Numbers
let nums6 = [-3, 0, 5, 8, -1, 4];
let filteredNums = nums6.filter((num)=>num>0).map((num)=>num*2);
console.log(filteredNums);

//15.Find First Word That Ends With "ing"
let words3 = ["play", "running", "eat", "coding", "sit"];
let ingWord = words3.find((word)=>{
    return word.endsWith('ing')
});
console.log(ingWord);