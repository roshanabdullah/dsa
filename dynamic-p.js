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
