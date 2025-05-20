//1.Get the squares of all even numbers
let nums = [1, 2, 3, 4, 5, 6];
let squares = nums.filter((num)=>num%2===0).map((num)=>Math.sqrt(num));
console.log(squares);

//2.Filter strings with length > 3 and convert them to uppercase
let words = ["hi", "hello", "world", "a", "there"];
let uppercaseWords = words.filter((word)=>word.length>3).map((word)=>word.toUpperCase());
console.log(uppercaseWords);

//3.Find all numbers greater than 10, then multiply them by 3
let nums2 = [5, 12, 8, 21, 14];
var numsRes = nums2.filter((num)=>num>10).map((num)=>num*3)
console.log(numsRes);

//4.Get the square roots of numbers greater than or equal to 16
let nums3 = [9, 16, 25, 4, 36];
var squareRes = nums3.filter((num)=>num>=16).map((num)=>Math.sqrt(num));
console.log(squareRes);

//5.Convert all negative numbers to their absolute value
let nums4 = [-1, 2, -3, 4, -5];
var absNegative = nums4.filter((num)=>num<0).map((num)=>Math.abs(num));
console.log(absNegative);

// 6.Double Even Numbers
let nums5 = [1, 2, 3, 4, 5, 6];
let evenNums = nums5.filter((num)=>num%2===0).map((num)=>num*2);
console.log(evenNums);

//7.Total Price of In-Stock Items
let products = [
    { name: "pen", price: 10, inStock: true },
    { name: "book", price: 50, inStock: false },
    { name: "notebook", price: 30, inStock: true }
  ];

let totalPrice = products.filter((product)=>product['inStock']===true).reduce((acc,curr)=>{
    return acc+curr['price'];
},0)
console.log(totalPrice);

//8.Check for Long Words
let wordsArray = ["hello", "amazing", "JavaScript", "extraordinary"];
let isLongestWordsContains = wordsArray.some((word)=>word.length>10);
console.log(isLongestWordsContains);

//9.Find First Failing Student
let students = [
    { name: "John", score: 80 },
    { name: "Alice", score: 90 },
    { name: "Bob", score: 30 },
    { name: "Carol", score: 25 }
  ];
let failedStudent = students.find((student)=>student['score']<35);
console.log(failedStudent);

//10.Group Names by First Letter
let names = ["Alice", "Arnold", "Bob", "Charlie", "David", "Daniel"];
let groupedNames = names.reduce((acc,name)=>{
    if(!acc[name[0]]){
        acc[name[0]] = []
    }
    acc[name[0]].push(name);
    return acc;
},{})
console.log(groupedNames);

//11.Remove Duplicates from an Array
let arr = [1, 2, 2, 3, 4, 4, 5];
let duplicateAaray = [];
function removeDuplicates(arr){
    for(let i of arr){
        if(!duplicateAaray.includes(i)){
            duplicateAaray.push(i)
        }
    }
    return duplicateAaray;
}
console.log(removeDuplicates([...arr]))

console.log(...new Set(arr))

//12.Flatten a Nested Array
let nestedArr = [1, [2, 3], [4, [5, 6]]];
let flattenArray = nestedArr.flat(2);
console.log(flattenArray)

//13.Reverse Words in a Sentence
let sentence = "JavaScript is awesome";
let revSentence = sentence.split(' ').reverse().join(' ');
console.log(revSentence)

//14.Count Character Frequency in a String
let str = "mississippi";
let charFreq = str.split('').reduce((acc,curr)=>{
    acc[curr] = (acc[curr] || 0)+1;
    return acc;
},{})
console.log(charFreq);

//15.Find the Most Frequent Element in an Array
let items = [1, 3, 2, 3, 4, 3, 5];
let numsFreq = items.reduce((acc,curr)=>{
    acc[curr] = (acc[curr] || 0)+1;
    return acc;
},{});
let maxNum = Object.keys(numsFreq).reduce((acc,curr)=>{
    return numsFreq[curr]>numsFreq[acc] ? curr : acc;
})
console.log(maxNum)

//16.Rotate Array by K Places
let arr2 = [1, 2, 3, 4, 5];
let k = 2;
console.log(arr2.slice(-k).concat(arr2.slice(0,-k)))

//17.Check if Two Strings Are Anagrams
function isAnagramsOrNot(str1,str2){
    let s1Sort = str1.split('').sort().join('');
    let s2Sort = str2.split('').sort().join('');

    if(str1.length !== str2.length) return false;
        if(s1Sort === s2Sort){
            return true;
        }
        return false;
}
console.log(isAnagramsOrNot("listen","silent"))
console.log(isAnagramsOrNot("hello","world"))