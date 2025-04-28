// function findMin(arr){
//     let min = arr[0];
//     let max = arr.length-1;
//     for(let i of arr){
//         if(i<min){
//             min = i;
//         }
//     }
//     return min;
// }
// console.log(findMin([4,5,6,7,0,1,2]))

function findMin(arr){
    let low = 0;
    let high = arr.length - 1;
    while(low < high){
        let mid = Math.floor((low + high) / 2);
        if(arr[mid] > arr[high]){
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return arr[low];
}
console.log(findMin([4,5,6,7,1,2])); // Output: 1
//Situation	                  Use
//Looking for exact value	high = mid - 1
//Looking for minimum or boundary	high = mid (don't skip mid)