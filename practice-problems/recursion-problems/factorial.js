function fact(n){
    if(n===1) return 1;
    return n*(fact(n-1)); //calling a function itself again and again
}
console.log(fact(5))