function findNumOccurence(arr,n){
    let nCount = 0;
    for(let i of arr){
        if(i===n){
            nCount+=1;
        }
    }
    return nCount;
}
console.log(findNumOccurence([1, 2, 3, 2, 4, 2],2))