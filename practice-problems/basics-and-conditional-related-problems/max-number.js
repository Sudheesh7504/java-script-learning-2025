function isMaxNumber(a, b, c){
    if(a>b && a>c){
        return `a: (${a} is greater`;
    } else if(b>a && b>c){
        return `b: ${b} is greater`;
    } else {
        return `c: ${c} is greater`;
    }

}
console.log(isMaxNumber(10,20,5));