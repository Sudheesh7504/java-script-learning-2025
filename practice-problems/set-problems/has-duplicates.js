function hasDuplicates(arr){
    let set1 = new Set();
    for(let i of arr){
        if(set1.has(i)){
            return true;
        }
        set1.add(i);
    }
    return false;
}
console.log(hasDuplicates([1,2,3,4]));
console.log(hasDuplicates([1,2,3,1]));