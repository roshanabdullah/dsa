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

// Fibnocci Series
// memoization method (top down approach)

function FibnocciDynamicVersion(){
    let cache = {}
    
    return function fib(n) {
        if(n in cache) {
            return cache[n]
        }
        else {
            if(n < 2) {
                return n;
            }
            
            else {
                cache[n] = fib(n - 1) + fib(n - 2)
                return cache[n]
            }
        }
    }
}


// bottom up approach
function FibMaster2(n) {
    let answer = [0, 1]
    
    for (let i=2; i<=n; i++) {
        answer.push(answer[i - 2] + answer[i - 1])
    }
    return answer.pop()
}

const fasterFib = FibnocciDynamicVersion();
console.log('DP2: ', FibMaster2(100))
console.log('DP: ', fasterFib(100))
