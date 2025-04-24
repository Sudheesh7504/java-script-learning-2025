function findSecodnMin(arr){
    let firstMin = arr[0];
    let secondMin = arr[1];
    for(let i of arr){
        if(i<firstMin){
            secondMin = firstMin;
            firstMin = i;
        } else if(i<secondMin && i!==firstMin){
            secondMin = i;
        }
    }
    return secondMin;
}
console.log(findSecodnMin([4,2,1,7,3]))