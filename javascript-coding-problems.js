

function reverse(s){
    let newStr = ""
    for (let i = s.length - 1; i>=0; i--) {
        newStr = newStr + s[i]
    }
}

reverse('hello')

function  checkPalindrome(s) {
    const cleanedString = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    const reversedString = cleanedString.split('').reverse().join('')
    
    return cleanedString === reversedString
    
    
}

checkPalindrome('A man, a plan, a canal, Panama'); // true
checkPalindrome('race a car'); // false



function FizzBuzz(n) {
    let result = [];
    
    for (let i=1; i<=n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz")
        }
        else if(i % 3 === 0) {
            result.push("Fizz")
        }
        else if(i % 5 === 0) {
            result.push("Buzz")
        }
        else {
            result.push(i)
        }
    }
    console.log(result)
    return result;
}

FizzBuzz(20)




