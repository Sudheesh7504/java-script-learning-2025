function revString(str){
    if(str.length<=1){
        return str;
    }
    return revString(str.slice(1))+str[0]
}
console.log(revString("sudeesh"))