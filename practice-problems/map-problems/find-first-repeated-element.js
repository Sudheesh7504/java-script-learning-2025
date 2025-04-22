function findFirstRepeatedElement(arr){
    const map = new Map();
    for (let i of arr) {
        if (map.has(i)) return i;
        map.set(i, 1);
    }
    return null; 
}

console.log(findFirstRepeatedElement([1,2,3,5,3,5,6]))