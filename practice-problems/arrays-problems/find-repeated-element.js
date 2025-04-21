function findRepeatedNumber(arr){
    let set1 = new Set();
    for(let i of arr){
        if(set1.has(i)){
            return i;
        }
        set1.add(i);
    }
    return -1
}
console.log(findRepeatedNumber([1,2,3,4,2,5]))