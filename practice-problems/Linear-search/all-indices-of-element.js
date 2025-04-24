function findAllIndexOfElement(arr,ele){
    let indices = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]==ele){
            indices.push(i);
        }
    }
    return indices.length ? indices : "Not found";
}
console.log(findAllIndexOfElement([10,20,30,40,40,50],40))