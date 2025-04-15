function findAvg(arr1){
    let arrLen = arr1.length;
    let sum = 0;
    for(let i of arr1){
        sum+=i;
    }
    return parseFloat(sum/arrLen).toFixed(2);
}
console.log(findAvg([1,3,4,5,2,5,6]))