function findAllIndexOfElement(arr,target){
    let indices = [];
    arr.forEach((value,index)=>{
        if(value===target){
            indices.push(index);
        }
    });
    return indices.length ? indices : "Not found";
}
console.log(findAllIndexOfElement([10,20,30,40,40,50],40))