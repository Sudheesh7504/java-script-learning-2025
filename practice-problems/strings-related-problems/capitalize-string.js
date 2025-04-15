function capitalize(str){
    let cap = str.split(" ").map((word)=>word.charAt(0).toUpperCase()+word.slice(1)).join(" ");
    return `${cap}`;
}
console.log(capitalize("sudeesh is a good boy"))