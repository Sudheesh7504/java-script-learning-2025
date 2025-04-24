function findSumOfN(n){
    if (n === 0) return 0; 
    return n+(findSumOfN(n-1))
}
console.log(findSumOfN(5))