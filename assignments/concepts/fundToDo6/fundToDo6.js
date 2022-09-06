// Threes and Fives
// function threesFives() {
//   var sum = 0;
//   for (var i = 100; i < 4000000; i++) {
//     if (i %3 == 0 && i %5 == 0) {
//       continue;
//     } else if (i %3 == 0 || i %5 == 0) {
//       sum += i;
//     }
//   }
//   return(sum);
// } 
// console.log(threesFives());

// Better Threes and Fives
// function betterThreesFives(start,end) {
//   var sum = 0;
//   for (var i = start; i < end; i++) {
//     if (i %3 == 0 && i %5 == 0) {
//       continue;
//     } else if (i %3 == 0 || i %5 == 0) {
//       sum += i;
//     }
//   }
//   return(sum);
// } 
// console.log(betterThreesFives(100,4000000));

// Generate Coing Change
// function generateCoinChange(cents) {
//   var quarters = Math.floor(cents / 25);
//   var centsLeft = cents - (quarters * 25);
//   var dimes = Math.floor(centsLeft / 10);
//   centsLeft = centsLeft - (dimes * 10);
//   var nickels = Math.floor(centsLeft / 5);
//   centsLeft = centsLeft - (nickels * 5);
//   var pennies = centsLeft;
//   centsLeft = centsLeft - pennies;
//   return(cents + ' cents can be represented by:\nquarters: ' + quarters + '\ndimes: ' + dimes + '\nnickels: '+ nickels + '\npennies: ' + pennies) 
// }
// console.log(generateCoinChange(94));

// Messy Math Mashup
// function messyMath(num) {
//     var sum = 0;
//   for (var count = 1; count <= num; count++) {
//     if ((count / num) == (1 / 3)) {
//       return(-1);
//     } else if (count %3 == 0) {
//       continue;
//     } else if (count %7 == 0) {
//       sum = sum + (count * 2);
//     } else {
//       sum = sum + count;
//     }
//   }
//   return(sum);
// }
// console.log(messyMath(4));
// console.log(messyMath(8));
// console.log(messyMath(15));

// Twelve-Bar Blues
// function twelveBars() {
//   for (var i = 1; i <= 12; i++) {
//     console.log(i);
//     console.log('chick');
//     console.log('boom');
//     console.log('chick');
//   }
// }
// twelveBars();

// Fibonacci
// function fibonacci(n) {
//   // create a new array of size n
//   var series = new Array(n);
//   // fills all places in array with 0
//   series.fill(0);
//   // seed value for 1st element
//   series[0] = 0;
//   // seed value for 2nd element
//   series[1] = 1;
//   for (var i = 2; i < n; i++) {
//     // apply the basic fibonacci formula
//     series[i] = series[i - 1] + series [i - 2];
//   }
//   // print the series
//   console.log(series);
//   return(series[series.length - 1] + series[series.length - 2]);
// }
// console.log(fibonacci(3));

// Sum to One Digit - can't get the recurrsion
// function sumToOne(num) {
//   var sum = 0;
//   while (num) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return(sum);
// }
// console.log(sumToOne(928));

// Clock Hand Angles
function clockHandAngles(seconds) {
  var days = Math.floor(seconds / 86400);
  var secondsLeft = seconds - days * 86400;
  var hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft - hours * 3600;
  var minutes = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft - minutes * 60;
  seconds = secondsLeft;
  secondsLeft = secondsLeft - seconds;
  var secondHand = 360 / 60 * seconds;
  var minuteHand = (360 / 60 * minutes) + (secondHand / 360 * 360 / 60);
  var hourHand = (360 / 12 * hours) + (minuteHand / 360 * 360 / 12);
  return(
    'Hour hand: ' + hourHand + ' degs. ' + 
    'Minute hand: ' + minuteHand + ' degs. ' + 
    'Second hand: ' + secondHand + ' degs.'
  )
}
console.log(clockHandAngles(3600));
console.log(clockHandAngles(119730));

// Is Prime
// function isPrime(num) { // returns boolean
//   if (num <= 1) return false; // one, zero, and negatives
//   if (num % 2 === 0 && num > 2) return false; // even numbers
//   var s = Math.sqrt(num); // pre-calculate the square root
//   for (var i = 3; i <= s; i += 2) { // start = 3, end = sqrt, increment by twos
//     if (num % i === 0) return false;
//   }
//   return true;
// }
// console.log(isPrime(11));