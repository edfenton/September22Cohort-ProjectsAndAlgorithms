// Countdown
// function countdown(num) {
//   var arr = [];
//   for (num; num>=0; num--) {
//     arr.push(num);
//   }
//   return(arr.length);
// }
// console.log(countdown(25));

// Print and Return
// function printAndReturn(arr) {
//   console.log(arr[0]);
//   return(arr[1]);
// }
// console.log(printAndReturn([1,2]));

// First Plus Length
// function firstPlusLength(arr) {
//   return(arr[0] + arr.length);
// }
// console.log(firstPlusLength([1,2,3]));
// console.log(firstPlusLength(['what?',2,3]));
// console.log(firstPlusLength([true,2,3]));
// console.log(firstPlusLength([false,2,3]));

// Values Greater than Second
// var arr = [1,3,5,7,9,13];
// var total = 0;
// for (i = 1; i<arr.length; i++) {
//   if (arr[i] > arr[1]) {
//     console.log(arr[i]);
//     total++;
//   }
// }
// console.log(total);

// Values Greater than Second, Generalized
// function valuesGreaterThanSecond(arr) {
//   var newArr = [];
//   for (i = 1; i<arr.length; i++) {
//     if (arr[i] > arr[1]) {
//       newArr.push(arr[i]);
//     }
//   }
//   console.log(newArr.length);
//   return(newArr);
// }
// console.log(valuesGreaterThanSecond([1,3,5,7,9,13]));

// This Length, That Value
// function generateArr(length,value) {
//   if (length == value) {
//     return('Jinx!');
//   } else {
//     arr = [];
//     for (i = 1; i <= length; i++) {
//       arr.push(value);
//     }
//     return(arr);
//   }
// }
// console.log(generateArr(5,6));
// console.log(generateArr(5,5));

// Fit the First Value
// function arrSize(arr) {
//   if (arr[0] > arr.length) {
//     return('Too big!');
//   } else if (arr[0] < arr.length) {
//     return('Too small!');
//   } else {
//     return('Just right!')
//   }
// }
// console.log(arrSize([10,1,1]));
// console.log(arrSize([1,1,1]));
// console.log(arrSize([3,1,1]));

// Fahrenheit to Celsius
// function fahrenheitToCelsius(fDegrees) {
//   return((5/9) * (fDegrees-32));
// }
// console.log(fahrenheitToCelsius(32));

// Celsius to Fahrenheit
// function celsiusToFahrenheit(cDegrees) {
//   return(((9/5) * cDegrees) + 32);
// }
// console.log(celsiusToFahrenheit(0));

// Celsius to Fahrenheit OPTIONAL
for (i = 200; i > -200; i--) {
  cDeg = i;
  fDeg = ((9/5)* cDeg) + 32;
  if ( cDeg == fDeg) {
    console.log('C = ' + cDeg + ' | F = ' + fDeg);
    break;
  } else {
    console.log('C = ' + cDeg + ' | F = ' + fDeg);
  }
}