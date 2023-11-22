string = "'Helloo'"

modified_string = string.replace(/^'|'$/g, '')

countWords = {}
 
// Count the occurences of each word
for (let i=0; i<modified_string.length; i++) {
    let word = modified_string[i].toLowerCase()
    if(countWords[word]) {
        countWords[word]++;
    }
    else {
        countWords[word] = 1;
    }
}

// Count the number of words that repeat

repeatingWordCount = 0;
for (var word in countWords) {
    if(countWords[word] > 1) {
        repeatingWordCount++;
    }
}

console.log(repeatingWordCount)

// so returns 2, as we have in Helloo, l and o which are repeating 2 times. If it was like Hello, then l was repeating, we would have 1.



