function positiveNegativeCount(arr1){
    let posCount = 0;
    let negCount = 0;
    for(let i of arr1){
        if(i>=0){
            posCount+=1;
        } else {
            negCount+=1;
        }
    }
    return `PostiveCount:${posCount},NegativeCount:${negCount}`;
}
console.log(positiveNegativeCount([1,3,-1,0,-3,-9,1,3,-9,1,-4]))