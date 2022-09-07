// Extract-o-matic
// function extractDigit(num,digitNum) {
//   if (digitNum >= 0) {
//     let place = 1 + '0'.repeat(digitNum);
//     let temp = Math.floor(num / place) % 10;
//     return(temp);
//   } else {
//     let place2 = 1 + '0'.repeat(Math.abs(digitNum))
//     let temp2 = Math.floor(num * place2) % 10;
//     return(temp2);
//   }
// }
// console.log(extractDigit(1824,2)); // 8
// console.log(extractDigit(1824,0)); // 4
// console.log(extractDigit(1824,7)); // 0
// console.log(extractDigit(123.45,-1)); // 4
// console.log(extractDigit(123.45,-2)); // 5
// if I was doing negative numbers, I'd just use ABS on num

// Most Significant Digit - can't figure out how to do this without using a string
function sigDigit(num) {
  let str = num.toString();
  for (let i = 0; i < str.length; i++) {
    if (str[i] > 0) {
      return(str[i]);
    }
  }
}
console.log(sigDigit(12345)); // 1
console.log(sigDigit(67.89)); // 6
console.log(sigDigit(0.00987)); // 9