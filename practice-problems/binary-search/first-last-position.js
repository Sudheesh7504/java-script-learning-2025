function firstBinary(arr,target){
    let start = 0;
    let end = arr.length-1;
    let result = -1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]===target){
            result = mid;
            end = mid-1;
        } else if(target<arr[mid]){
            end = mid-1;
        } else {
            start = mid+1;
        }
    }
    return result;
}

function lastBinary(arr,target){
    let start = 0;
    let end= arr.length-1;
    let result = -1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]===target){
            result = mid;
           start = mid+1;
        } else if(target<arr[mid]){
            end = mid-1;
        } else {
            start = mid+1;
        }
    }
    return result;
}

function serachRange(nums,target){
    let first = firstBinary(nums,target);
    let last = lastBinary(nums,target);
    return [first,last];
}

console.log(serachRange([5,7,7,8,8,8,7,10], 7));
