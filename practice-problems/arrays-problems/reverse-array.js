function reverseArray(arr){
    let strArr = String(arr);
    let revArr = "";
    for(let i of strArr){
        revArr= i+revArr;
    }
    return revArr.split(',').map(Number);
}
console.log(reverseArray([1, 2, 3, 4]));