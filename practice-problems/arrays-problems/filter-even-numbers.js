function filterEvenNumbers(arr1){
    let evenArr = [];
    for(let i of arr1){
        if(i%2===0){
            evenArr.push(i);
        }
    }
    return `${evenArr}`;
}

console.log(filterEvenNumbers([1,3,5,8,10]));