function findUniqueNumber(arr) {
    let result = 0;
    for (let num of arr) {
        result ^= num; 
    }
    return result;
}
console.log(findUniqueNumber([2, 3, 2, 4, 3]))