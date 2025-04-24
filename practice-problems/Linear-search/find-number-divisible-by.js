function findFirstDivisibleElementby3and5(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%3===0 && arr[i]%5===0){
            return arr[i];
        }
    }
    return -1;
}
console.log(findFirstDivisibleElementby3and5([2,7,10,15,20,30]))
//find
function findFirstDivisibleElementby3and5(arr){
    const result=arr.find(ele=>ele%3===0 && ele%5===0);
    return result !== undefined ? result : -1;
}
console.log(findFirstDivisibleElementby3and5([2,7,10,15,20,30]))