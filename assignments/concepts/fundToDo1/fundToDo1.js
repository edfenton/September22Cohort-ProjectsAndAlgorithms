// Setting and Swapping
// var myNumber = 7;
// var myName = 'Ed';
// var temp = '';
// temp = myNumber;
// myNumber = myName;
// myName = temp;
// console.log('myNumber = ' + myNumber);
// console.log('myName = ' + myName);

// Print -52 to 1066
// for (num = -52; num < 1067; num++) {
//   console.log(num);
// }

// Don't Worry, Be Happy
// function beCheerful() {
//   console.log('Good Morning!');
// }
// for (num = 1; num < 99; num++) {
//   beCheerful();
// }

// Multiples of Three – but Not All
// for (num = -300; num < 1; num += 3) {
//   if (num != -3 && num != -6) {
//     console.log(num);
//   } else {
//     continue;
//   }
// }

// Printing Integers with While
// var num = 2000;
// while (num < 5281) {
//   console.log(num);
//   num += 1;
// }

// You Say It’s Your Birthday
// var realMonth = 1;
// var realDate = 7;
// function checkBday(month, date) {
//   if (month == realMonth && date == realDate || month == realDate && date == realMonth) {
//     console.log('How did you know?')
//   } else {
//     console.log('Just another day...')
//   }
// }
// checkBday(2,7);

// Leap Year
// function leapYear(year) {
//   if (year % 400 == 0) {
//     console.log('Leap Year');
//   } else if (year % 100 == 0) {
//     console.log('Not a Leap Year');
//   } else if (year % 4 == 0) {
//     console.log('Leap Year');
//   } else {
//     console.log('Not a Leap Year');
//   }
// }
// leapYear(2022);

// Print and Count
// var count = 0;
// for (num = 512; num < 4097; num++) {
//   if (num % 5 == 0) {
//     console.log(num);
//     count++;
//   } else {
//     continue;
//   }
// }
// console.log('Total = ' + count);

// Multiples of Six - can't figure out how to do this in a while loop
// for (num = 0; num < 60001; num++) {
//   if (num %6 == 0) {
//     console.log(num);
//   } else {
//     continue;
//   }
// }

// Counting, the Dojo Way
// for (num = 1; num < 101; num++) {
//   if (num %10 == 0) {
//     console.log(num + ': Coding Dojo');
//   } else if (num %5 == 0) {
//     console.log(num + ': Coding');
//   } else {
//     console.log(num + ':');
//   }
// }

// What Do You Know?
// function knowledge(incoming) {
//   console.log(incoming);
// }
// knowledge('More Stuff');

// Whoa, That Sucker’s Huge…
// var total = 0
// for (num = -300000; num < 300001; num++) {
//   if (num %2 != 0) {
//     total = total + num;
//   }
// }
// console.log(total);

// Countdown by Fours
// num =2016;
// while (num > 0) {
//   console.log(num);
//   num = num - 4;
// }

// Flexible Countdown
// function countDown(lowNum, highNum, mult) {
//   while (highNum > lowNum) {
//     console.log(highNum);
//     highNum = highNum - mult;
//   }
// }
// countDown(2, 9, 3);

// The Final Countdown - couldn't figure out how to do this in a while loop
function finalCountDown(mult,startNum,endNum,excl) {
  for (startNum; startNum < endNum; startNum++) {
    if (startNum %mult == 0) {
      if (startNum != excl) {
        console.log(startNum);
      }
    }
  }
}
finalCountDown(3,5,17,9);