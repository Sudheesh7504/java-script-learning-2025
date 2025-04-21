function findMissingNum(arr){
    let n = arr.length+1;
    expectedSum = (n*(n+1))/2
    actualsum = 0;
    for(let i of arr){
        actualsum+=i;
    }
    return expectedSum-actualsum;
}
console.log(findMissingNum([1,2,4,5]))