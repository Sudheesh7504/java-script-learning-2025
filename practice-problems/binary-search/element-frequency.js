function findElementFrequency(arr){
    const map = new Map();
    for(let i of arr){
        if(map.has(i)){
            map.set(i,map.get(i)+1)
        } else {
            map.set(i,1)
        }
    }
    for(let [key,value] of map){
       if(value===1){
        return key;
       }
    }
}
console.log(findElementFrequency([1,2,3,4,1,5,2,3]))