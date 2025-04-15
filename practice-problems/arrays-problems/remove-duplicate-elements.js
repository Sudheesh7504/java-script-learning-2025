function removeDuplicates(arr1){
    let uniqArr = [];
    for(let i of arr1){
        if(!uniqArr.includes(i)){
            uniqArr.push(i);
        }
    }
    return `${uniqArr}`;
}
console.log(removeDuplicates([1,2,3,1,2,3,6,82]))