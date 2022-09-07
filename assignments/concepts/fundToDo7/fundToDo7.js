// Rockin' the Dojo sweatshirt
// function sweatshirtPricing(num) {
//   if (num == 1) {
//     return(num + ' sweatshirt at $' + Math.ceil(20) + ' each is $' + Math.ceil(num * 20));
//   } else if (num == 2) {
//     return(num + ' sweatshirt at $' + Math.ceil(20 * 0.91) + ' each is $' + Math.ceil(num * 20 * 0.91));
//   } else if (num == 3) {
//     return(num + ' sweatshirt at $' + Math.ceil(20 * 0.81) + ' each is $' + Math.ceil(num * 20 * 0.81));
//   } else if (num > 3) {
//     return(num + ' sweatshirt at $' + Math.ceil(20 * 0.65) + ' each is $' + Math.ceil(num * 20 * 0.65));
//   } else {
//     return('How many sweatshirts?');
//   }
// }
// console.log(sweatshirtPricing(1));
// console.log(sweatshirtPricing(2));
// console.log(sweatshirtPricing(3));
// console.log(sweatshirtPricing(4));
// console.log(sweatshirtPricing(5));

// Clock Hand Angles, Revisited
function clockHandAngles(seconds) {
  var days = Math.floor(seconds / 86400);
  var secondsLeft = seconds - days * 86400;
  var hours = Math.floor(secondsLeft / 3600);
  secondsLeft = secondsLeft - hours * 3600;
  var minutes = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft - minutes * 60;
  seconds = secondsLeft;
  secondsLeft = secondsLeft - seconds;
  var secondHand = Math.trunc(360 / 60 * seconds);
  var minuteHand = Math.trunc((360 / 60 * minutes) + (secondHand / 360 * 360 / 60));
  var hourHand = Math.trunc((360 / 12 * hours) + (minuteHand / 360 * 360 / 12));
  return(
    'Hour hand: ' + hourHand + ' degs. ' + 
    'Minute hand: ' + minuteHand + ' degs. ' + 
    'Second hand: ' + secondHand + ' degs.'
  )
}
console.log(clockHandAngles(3600.1));
console.log(clockHandAngles(119730.1));