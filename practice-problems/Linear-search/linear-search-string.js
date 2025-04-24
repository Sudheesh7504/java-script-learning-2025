function findCharIndexes(str,target){
    let indices = [];
    for(let i=0;i<str.length;i++){
        if(str[i] === target){
            indices.push(i);
        }
    }
    return indices.length ? indices : "Not found";
}
console.log(findCharIndexes("Hello world","l"))

//using foreach
function findCharIndexes(str,target){
    let indices = [];
    str.split('').forEach((value,index)=>{
        if(value === target){
            indices.push(index);
        }
    })
    return indices.length ? indices : "Not found";
}
console.log(findCharIndexes("Hello world","l"))