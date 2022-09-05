// Biggie Size
// function makeItBig(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       arr[i] = 'big';
//     }
//   }
//   return(arr);
// }
// console.log(makeItBig([-1,3,5,-5]));

// Print Low, Return High
// function lowHigh(arr) {
//   var low = arr[0];
//   var high = arr[0];
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < low) {
//       low = arr[i];
//     } else if (arr[i] > high) {
//       high = arr[i];
//     }
//   }
//   console.log('Low = ' + low);
//   return('High = ' + high);
// }
// console.log(lowHigh([-1,3,5,-5]));

// Print One, Return Another
// function secondLastFirstOdd(arr) {
//   console.log('Second to Last Value = ' + arr[arr.length - 2]);
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] %2 != 0) {
//       return('First Odd Value = ' + arr[i]);
//       break;
//     }
//   }
// }
// console.log(secondLastFirstOdd([2,4,5,6,8,3,10]));

// Double Vision
// function double(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * 2;
//   }
//   return(arr);
// }
// console.log(double([1,2,3]));

// Count Positives
// function countPositives(arr) {
//   var positives = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       positives++;
//     }
//   }
//   arr[arr.length - 1] = positives;
//   return(arr);
// }
// console.log(countPositives([-1,1,1,1]));

// Evens and Odds
// function evensAndOdds(arr) {
//   var odds = 0;
//   // console.log('Initial Odds = ' + odds);
//   for (var o = 0; o < arr.length; o++) {
//     if (odds < 3) {
//       if (arr[o] %2 != 0) {
//         odds++;
//         // console.log(o + ' Odds = ' + odds);
//       } else {
//         odds = 0;
//         // console.log(o + ' Odds = ' + odds);
//       }
//     } else {
//       console.log("That's odd!")
//       break;
//     }
//   }
//   var evens = 0;
//   // console.log('Initial Evens = ' + evens);
//   for (var e = 0; e < arr.length; e++) {
//     if (evens < 3) {
//       if (arr[e] %2 == 0) {
//         evens++;
//         // console.log(e + ' Evens = ' + evens);
//       } else {
//         evens = 0;
//         // console.log(e + ' Evens = ' + evens);
//       }
//     } else {
//       console.log("Even more so!")
//       break;
//     }
//   }
// }
// console.log('TEST 1 >>> ODDS');
// evensAndOdds([1,2,4,5,5,5,6]);
// console.log('TEST 2 >>> EVENS');
// evensAndOdds([1,2,3,4,4,4,5]);
// console.log('TEST 3 >>> ODDS AND EVENS');
// evensAndOdds([1,1,1,2,2,2,3]);

// Increment the Seconds
// function increment(arr) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] %2 != 0) {
//       arr[i] = arr[i] +1;
//     }
//   }
//   return(arr);
// }
// console.log(increment([1,2,3,4,5,6,7,8,9,10]));

// Previous Lengths
// function previousLengths(arr) {
//   for (var i = arr.length - 1; i > 0; i--) {
//     arr[i] = arr[i - 1].length;
//   }
//   return(arr);
// }
// console.log(previousLengths(['dog','bird','phone','giving','without','patton','bruce','ruth','and']));

// Add Seven to Most
// function addSeven(arr) {
//   arr.shift();
//   for (var i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + 7;
//   }
//   return(arr);
// }
// console.log(addSeven([1,2,3,4,5,6,7,8,9,10]));

// Reverse Array
// function reverse(arr) {
//   arr.reverse();
//   return(arr);
// }
// console.log(reverse([1,2,3,4,5,6,7,8,9,10]));

// Outlook: Negative
// function negative(arr) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     newArr.push(Math.abs(arr[i]) * -1);
//   }
//   return(newArr);
// }
// console.log(negative([1,-3,5]));

// Always Hungry
// function hungry(arr) {
//   let text = arr.join('');
//   if (text.includes('food')) {
//     console.log('Yummy!');
//   } else {
//     console.log("I'm hungry!")
//   }
// }
// hungry(['word','word','word']);
// hungry(['food','word','word']);
// hungry(['word','food','word']);
// hungry(['word','word','food']);
// hungry(['food','food','food']);

// Swap Toward the Center
// function swap(arr) {
//   var temp;
//   for (var i = 0; i < arr.length / 2; i++) {
//     temp = arr[i];
//     arr[i] = arr[arr.length - (i + 1)];
//     arr[arr.length - (i + 1)] = temp;
//   }
//   return(arr);
// }
// console.log(swap([true,42,"Ada",2,"pizza"]));

// Scale the Array
function scale(arr,num) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * num;
  }
  return(arr);
}
console.log(scale([1,2,3,4,5],7));