function countVowels(str){
    let vowelCount = 0;
    const vowelStr = "aeiouAEIOU";
        for(let i of str){
            if(vowelStr.includes(i)){
                vowelCount+=1;
            }
        }
    return `${vowelCount}`;
}
console.log(countVowels("sudeEsh"));