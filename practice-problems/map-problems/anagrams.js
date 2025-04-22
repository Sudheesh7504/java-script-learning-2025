function isAnagramsOrNot(str1,str2){
    let s1Sort = str1.split('').sort().join('');
    let s2Sort = str2.split('').sort().join('');

    if(str1.length !== str2.length) return false;
        if(s1Sort === s2Sort){
            return true;
        }
        return false;
}
console.log(isAnagramsOrNot("listen","silent"))
console.log(isAnagramsOrNot("hello","world"))