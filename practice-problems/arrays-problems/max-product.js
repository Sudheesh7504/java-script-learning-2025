function findMaxProduct(arr){
    let firstMax = arr[0];
    let secondMax = arr[0];
    for(let i of arr){
        if(Math.abs(i)>firstMax){
            secondMax = firstMax;
            firstMax = Math.abs(i);
        } else if(Math.abs(i)>secondMax && Math.abs(i)!==firstMax){
            secondMax = Math.abs(i);
        }
    }
    return firstMax*secondMax;
}
console.log(findMaxProduct([-10,-20,5,1]))
console.log(findMaxProduct([2,3,-2,4]))