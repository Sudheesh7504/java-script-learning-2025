function findPeak(arr){
    let peakArr = [];
    for(let i=0;i<=arr.length;i++){
        if(arr[i]>arr[i-1] && arr[i]>arr[i+1]){
            peakArr.push(i)
        }
    }
    return peakArr;
}
console.log(findPeak([1,3,20,4,20,1,0]))