function findTargetInsertPosition(arr,target){
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
       let mid = Math.floor((start+end)/2);
       if(arr[mid] === target) return mid;
       else if(target<arr[mid]) end=mid-1;
       else start = mid+1;
    }
    return start;
}
console.log(findTargetInsertPosition([1,3, 5, 7, 9, 11], 2));