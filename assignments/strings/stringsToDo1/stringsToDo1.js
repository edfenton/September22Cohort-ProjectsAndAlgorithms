// Remove Blanks
// function removeBlanks(str) {
//   let newstr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       newstr = newstr + str[i];
//     } 
//   }
//   return(newstr);
// };

// console.log(removeBlanks(" Pl ayTha tF u nkyM usi c ")); // "PlayThatFunkyMusic"
// console.log(removeBlanks("I can not BELIEVE it's not BUTTER")); // "IcannotBELIEVEit'snotBUTTER"

// Get Digits - can use isNaN() and Number()
// function getDigits(str) {
//   let newstr = "";
//   for (let i = 0; i < str.length; i++) {
//     if(!isNaN(str[i])) {
//       newstr = newstr + str[i];
//     }
//   }
//   return(newstr);
// };

// console.log(getDigits("abc8c0d1ngd0j0!8")); // 801008
// console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0")); // 1357924680

// Acronyms - can use .split() and .toUpperCase()
// function acronym(str) {
//   let words = str.split(" ");
//   let newstr = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i] !== undefined) {
//       newstr = newstr + words[i][0];
//     }
//   }
//   newstr = newstr.toUpperCase();
//   return(newstr);
// };

// console.log(acronym(" there's no free lunch - gotta pay yer way. ")); //"TNFL-GPYW". 
// console.log(acronym("Live from New York, it's Saturday Night!")); // "LFNYISN".

// Count Non-Spaces
// function countNonSpaces(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       count++;
//     }
//   }
//   return(count);
// };

// console.log(countNonSpaces("Honey pie, you are driving me crazy")); // 29
// console.log(countNonSpaces("Hello world !")); // 11

// Remove Shorter Strings
function removeShorterStrings(arr,val) {
  let newarr = [];
  for (let i= 0; i < arr.length; i++) {
    if (arr[i].length >= val) {
      newarr.push(arr[i]);
    }
  }
  return(newarr);
};

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4)); // ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3)); // ['There', 'bug', 'the', 'system']