// Sigma
// function sigma(num) {
//   var sum = 0;
//   for (var i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return(sum);
// }
// console.log(sigma(15));

// Factorial
// function factorial(num) {
//   var factorial = 1;
//   for (var i = num; i > 0; i--) {
//     factorial = factorial * i;
//   }
//   return(factorial);
// }
// console.log(factorial(10));

// Star Art
// function drawLeftStars(num) {
//   return('*'.repeat(num) + ' '.repeat(75 - num));
// }
// function drawRightStars(num) {
//   return(' '.repeat(75 - num) + '*'.repeat(num))
// }
// function drawCenteredStars(num) {
//   return (' '.repeat((75 - num)/2) + '*'.repeat(num) + ' '.repeat((75 - num)/2))
// }
// console.log(drawLeftStars(25));
// console.log(drawRightStars(25));
// console.log(drawCenteredStars(25));

// Character Art
function drawLeftChars(num,char) {
  return(char.repeat(num) + ' '.repeat(75 - num));
}
function drawRightChars(num,char) {
  return(' '.repeat(75 - num) + char.repeat(num))
}
function drawCenteredChars(num,char) {
  return (' '.repeat((75 - num)/2) + char.repeat(num) + ' '.repeat((75 - num)/2))
}
console.log(drawLeftChars(25,'+'));
console.log(drawRightChars(25,'&'));
console.log(drawCenteredChars(25,'#'));