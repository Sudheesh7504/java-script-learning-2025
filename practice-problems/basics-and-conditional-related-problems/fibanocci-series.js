function fib(n){
    let fibArr = [0,1];
    for(let i=2;i<=n;i++){
        fibArr.push(fibArr[i-1]+fibArr[i-2])
    }
    return fibArr[7];
}
console.log(fib(7))