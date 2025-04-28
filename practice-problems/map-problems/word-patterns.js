function wordPattern(words,pattern){
    if(words.length!==pattern.length) return false;
    let charToWord = new Map();
    let wordToChar = new Map();
    for(let i=0;i<pattern.length;i++){
        const char = pattern[i]
        const word = words[i]
        if(charToWord.has(char) && charToWord.get(char)!==word) return false;
        if(wordToChar.has(word) && wordToChar.get(word)!==char) return false;
            charToWord.set(char,word);
            wordToChar.set(word,char);
    }
    return true;
}
console.log(wordPattern("aabba", ["cat", "cat", "bat", "bat", "cat"]));
console.log(wordPattern("xyzx", ["dog", "cat", "mouse", "dog"])); 
console.log(wordPattern("abba", ["dog", "cat", "cat", "fish"])); 
console.log(wordPattern("abc", ["dog", "dog", "dog"])); 
console.log(wordPattern(["apple", "banana", "apple"], ["red", "yellow", "red"])); 
console.log(wordPattern("xyx", ["one", "two", "one"])) 
console.log(wordPattern("xyx", ["one", "two", "two"]) ) 
console.log(wordPattern("abc", ["dog", "dog", "dog"]) )
console.log(wordPattern(["red", "blue", "red"], "aba") )
console.log(wordPattern("abacabad", ["one", "two", "one", "three", "one", "two", "one", "four"]))