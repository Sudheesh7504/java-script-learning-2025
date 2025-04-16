function checkArrayOrder(arr){
    for(let i =0; i<arr.length-1;i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
}
const array1 = [1, 2, 3, 4];
const array2 = [1, 3, 2];
console.log(checkArrayOrder(array1));
console.log(checkArrayOrder(array2))