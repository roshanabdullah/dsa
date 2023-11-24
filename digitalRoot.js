/**
 * @param {number} num
 * @return {number}
 */
// finds the digital root
//// 123456 -> 1+2+3+4+5+6 -> 15 -> 21 -> 2+1 -> 3
var addDigits = function(num) {
  // steps: 123456 - 1 -> 123455 % 9 -> 2 + 1 -> 3
    return ((num - 1) % 9) + 1
};

