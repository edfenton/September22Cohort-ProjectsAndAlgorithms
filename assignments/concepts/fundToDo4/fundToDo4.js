// Only Keep the Last Few
// function trimArr(arr,x) {
//   arr.length -= x;
//   return(arr);
// }
// console.log(trimArr([2,4,6,8,10],3));

// Math Help - couldn't figure this out, copied from geeksforgeeks
// function intercept(P,Q) {
//   var a = P[1] - Q[1];
//   var b = P[0] - Q[0];

//   // if line is parallel to the y axis
//   if (b == 0) {
//     console.log('x-intercept = ' + P[0]);
//     console.log('y-intercept = infinity');
//     return;
//   }

//   // if line is parallel to the x axis
//   if (a == 0) {
//     console.log('x-intercept = infinity');
//     console.log('y-intercept = ' + P[1]);
//     return;
//   }

//   // slope of the line
//   var m = a / (b * 1.0);

//   // y = mx + c
//   // use any of the given points to find c
//   let x = P[0];
//   let y = P[1];
//   let c = y - m * x;

//   // for finding the x-intercept put y = 0
//   y = 0;
//   let r = (y - c) / (m * 1.0);
//   console.log('x-intercept = ' + r);

//   // for finding the y-intercept put x = 0;
//   x = 0;
//   y = parseInt(m * x + c, 10);
//   console.log('y-intercept = ' + c.toFixed(11));
// }

// var p1 = [5,2];
// var p2 = [2,7];
// intercept(p1,p2);

// Poor Kenny
// function whatHappensToday() {
//   var guess = Math.random();
//   if (guess <= 0.1) {
//     console.log('Volcano ' + guess);
//   } else if (guess > 0.1 && guess <= 0.25) {
//     console.log('Tsunami ' + guess);
//   } else if (guess > 0.25 && guess <= 0.45) {
//     console.log('Earthquake ' + guess);
//   } else if (guess > 0.45 && guess <= 0.70) {
//     console.log('Blizzard ' + guess);
//   } else if (guess > 0.70) {
//     console.log('Meteor ' + guess);
//   } else {
//     console.log('Weird ' + guess);
//   }
// }
// whatHappensToday();

// What Really Happened? - works but does not seem right
// function whatReallyHappensToday() {
//   var guess = Math.random();
//   if (guess <= 0.1) {
//     console.log('Volcano ' + guess);
//   }
//   if (guess <= 0.15) {
//     console.log('Tsunami ' + guess);
//   }
//   if (guess <= 0.20) {
//     console.log('Earthquake ' + guess);
//   }
//   if (guess <= 0.25) {
//     console.log('Blizzard ' + guess);
//   }
//   if (guess <= 0.30) {
//     console.log('Meteor ' + guess);
//   }
//   if (guess > 0.30) {
//     console.log('All clear ' + guess);
//   }
// }
// whatReallyHappensToday();

// Soaring IQ
// function soaringIq(startIq,duration,dailyInc) {
// console.log('Starting IQ = ' + startIq);
//   for (var i = 1; i <= duration; i++) {
//     startIq += dailyInc * i;
//     console.log('Day ' + i + ' IQ Increase = ' + dailyInc * i);
//     console.log('Day ' + i + ' IQ Total = ' + startIq);
//   }
//   return('Final IQ = ' + startIq);
// }
// console.log(soaringIq(101,98,0.01));

// Letter Grade
// function letterGrade(score) {
//   if (score >= 90) {
//     return('Score: ' + score + '. Grade: A');
//   }
//   if (score < 90 && score >= 80) {
//     return('Score: ' + score + '. Grade: B');
//   }
//   if (score < 80 && score >= 70) {
//     return('Score: ' + score + '. Grade: C');
//   }
//   if (score < 70 && score >= 60) {
//     return('Score: ' + score + '. Grade: D');
//   }
//   if (score < 60) {
//     return('Score: ' + score + '. Grade: F');
//   }
// }
// console.log(letterGrade(88));
// console.log(letterGrade(61));

// More Accurate Grades
function letterGrade(score) {
  if (score >= 90) {
    if (score <= 92) {
      return('Score: ' + score + '. Grade: A-');
    } else {
      return('Score: ' + score + '. Grade: A');
    }
  }
  if (score < 90 && score >= 80) {
    if (score <= 82) {
      return('Score: ' + score + '. Grade: B-');
    } else if (score >= 88) {
      return('Score: ' + score + '. Grade: B+');
    } else {
      return('Score: ' + score + '. Grade: B');
    }
  }
  if (score < 80 && score >= 70) {
    if (score <= 72) {
      return('Score: ' + score + '. Grade: C-');
    } else if (score >= 78) {
      return('Score: ' + score + '. Grade: C+');
    } else {
      return('Score: ' + score + '. Grade: C');
    }
  }
  if (score < 70 && score >= 60) {
    if (score <= 62) {
      return('Score: ' + score + '. Grade: D-');
    } else if (score >= 68) {
      return('Score: ' + score + '. Grade: D+');
    } else {
      return('Score: ' + score + '. Grade: D');
    }
  }
  if (score < 60) {
    return('Score: ' + score + '. Grade: F');
  }
}
console.log(letterGrade(88));
console.log(letterGrade(61));