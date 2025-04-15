function findMax(arr1){
    let max = arr1[0];
    for(let i of arr1){
        if(i>max){
            max = i;
        }
    }
    return `${max}`;
}

console.log(findMax([1,39,2,34,45]))