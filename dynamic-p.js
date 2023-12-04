// Memoization
function memoizedAddTo80(n) {
    let cache = {}
    
    return function(n) {
        if (n in cache) {
        return cache[n]
    }
    else {
        return cache[n] = n + 80;
    }   
    }
}


const memoized = memoizedAddTo80();
console.log('1:', memoized(5))
console.log('2:', memoized(10))



// Common Substring
// Note: please restart the page if syntax highlighting works bad.
function commonSubstring(s) {

  let charCount = {};
  let commonChars = [];
  for (let i=0; i<s.length; i++) {
    if(charCount[s[i]]) {
      commonChars.push(s[i])
    }

    else {
      charCount[s[i]] = 1;
    }
  }

  return commonChars;
}

console.log(commonSubstring("Hello"))
