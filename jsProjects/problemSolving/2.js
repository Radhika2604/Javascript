//**************************Swap the two numbers without using third variable or any predefined method*************************************
/*
let a = 5;
let b = 10;

console.log(`Before swap: a = ${a}, b = ${b}`);

a = a + b; // a now becomes 15
b = a - b; // b now becomes 5 (original value of a)
a = a - b; // a now becomes 10 (original value of b)
console.log(`After swap: a = ${a}, b = ${b}`);
*/

//max number in an array

/*
function findMax(arr) {
  if (arr.length === 0) {
    return undefined; // handle case when array is empty
  }
  return Math.max(...arr);
}
// Example usage:
let array = [3, 7, 2, 8, 1];
console.log("Maximum number:", findMax(array)); // Output: 8
*/

/*
function findMax(arr) {
  if (arr.length === 0) {
    return undefined; // handle case when array is empty
  }
  let max = arr[0]; // Assume first element is the maximum

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]; // Update max if current element is larger
    }
  }
  return max;
}
// Example usage:
let array = [3, 7, 2, 8, 1];
console.log("Maximum number:", findMax(array)); // Output: 8
*/

/*

let maxByReduce = maxArr.reduce((acc, cur) => {
  if (cur > acc) {
    acc = cur;
  }
  return acc;
}, 0);
console.log(maxByReduce);

*/
