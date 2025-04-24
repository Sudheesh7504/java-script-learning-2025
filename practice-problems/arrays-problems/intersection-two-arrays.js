// function intersection(arr1,arr2){
//     let uniqueArr = [];
//     for(let i of arr1){
//         if(arr2.includes(i) && !uniqueArr.includes(i)){
//             uniqueArr.push(i)
//         } 
//     }
//     return uniqueArr;
// }
// let arr1 = [1,2,2,1];
// let arr2 = [2,2];
// console.log(intersection(arr1,arr2))

//using set
function intersection(arr1,arr2){
    let set1 = new Set(arr1);
    let set2 = new Set(arr2);
    return [...set1].filter((item)=>set2.has(item));
}


console.log(intersection([1,2,2,1],[2,2]))