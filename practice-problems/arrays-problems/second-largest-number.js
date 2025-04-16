function find2ndLargestNum(arr){
    let firstMax = arr[0];
    let secondMax = arr[0];
    for(let i of arr){
        if(i>firstMax){
            secondMax = firstMax;
            firstMax = i;
        }else if(i>secondMax && i!==firstMax){
            secondMax = i;
        }
    }
    return secondMax;
}
console.log(find2ndLargestNum([10, 15, 20, 8]));