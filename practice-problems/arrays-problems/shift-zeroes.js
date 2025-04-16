function shiftZeroes(arr){
    let intArr = [];
    let zeroArray = [];
    for(let i of arr){
        if(i===0){
            zeroArray.push(i);
        } else{
            intArr.push(i);
        }
    }
    return [...intArr,...zeroArray];
}
console.log(shiftZeroes([0, 1, 0, 3, 0, 5]))