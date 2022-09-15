// Push Front
// function pushFront(arr,val) {
//   let temp;
//   arr.push(val);
//   temp = arr[0];
//   arr[0] = arr[arr.length-1];
//   arr[arr.length-1] = temp;
//   return(arr);
// };
// console.log(pushFront([5,7,2,3], 8)); // [8,5,7,2,3]
// console.log(pushFront([99], 7)); // [7,99]

// // Pop Front
// function popFront(arr) {
//   let val = arr[0];
//   let temp;
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i+1];
//   }
//   arr.pop();
//   console.log(val);
//   return(arr);
// };

// console.log(popFront([0,5,10,15])) // 0 returned, with [5,10,15] printed in the function
// console.log(popFront([4,5,7,9])) // 4 returned, with [5,7,9] printed in the function

// Insert At
function insertAt(arr,idx,val) {
  for (i = arr.length; i > idx; i--) {
    arr[i] = arr[i-1];
  }
  arr[idx] = val;
  return(arr);
};

console.log(insertAt([100,200,5], 2, 311)); // [100,200,311,5]
console.log(insertAt([9,33,7], 1, 42)); // [9,42,33,7]