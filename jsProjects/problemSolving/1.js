//sum of 2 numbers
// function sum(a, b) {
//   return a + b;
// }
// console.log("sum of 2 numbers :", sum(5, 8));

//max number in an array

// const maxArr = [2, 4, 15, 7, 2, 1, 9, 4, 3, 2];
// console.log(maxArr);

// const maxNum = Math.max(...maxArr);
// console.log("Max number in array:", maxNum);

// function findMax(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// console.log(findMax(maxArr));

// let maxByReduce = maxArr.reduce((acc, cur) => {
//   if (cur > acc) {
//     acc = cur;
//   }
//   return acc;
// }, 0);
// console.log(maxByReduce);

// Remove duplicates from an array(plus sorted)
// const arr = [2, 4, 5, 7, 2, 1, 9, 4, 3, 2, 3, 2, 3];
// function removeDuplicates(arr) {
//   return arr
//     .filter((item, index) => arr.indexOf(item) === index)
//     .sort((a, b) => {
//       return a - b;
//     });
// }
// console.log("old array", arr);
// console.log("removed duplicates", removeDuplicates(arr));

// find the number of age

// let user = [
//   { age: 26, firstName: "akshay" },
//   { age: 36, firstName: "radhika" },
//   { age: 46, firstName: "arpit" },
//   { age: 56, firstName: "deepika" },
//   { age: 56, firstName: "neha" },
//   { age: 46, firstName: "deepak" },
// ];

// const output = user.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = acc[curr.age] + 1;
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});
// console.log(output);

// const counts = [];
// const sampleArray = ["a", "g", "b", "c", "a", "b", "a"];
// sampleArray.forEach(function (x) {
//   counts[x] = (counts[x] || 0) + 1;
// });
// console.log(counts);

//reverse a given string
// let str = "radhika";
// let split = str.split("").reverse().join("");
// console.log("reverse string :", split);

// function reverseString(str) {
//   let split = str.split(" ").map((e) => {
//     return e.split("").reverse().join("");
//   });
//   return split;
// }
// console.log(reverseString("my name is radhika agarwal"));

// sort an Array
// let x = [1, 4, 2, 7, 4, 9, 6, 8, 3, 5, 2, 1, 0, 5, 3, 6, 8];
// let c = x.sort((a, b) => {
//   return a - b;
// });
// console.log(x, c);

//function that takes an array of numbers and returns a new array with only the even numbers

//   const arr = [1, 2, 3, 4, 5, 6];
//   let newArr = arr.filter((item) => {
//     return item % 2 == 0;
//   });
//   console.log("even numbers:", newArr);

//prime number
// function isPrima(num) {
//     if (num < 1) {
//       return false;
//     }
//     for (let i = 2; i < num; i++) {
//       if (num % i == 0) {
//         return false;
//       }
//     }
//     return true;
//   }
//   isPrima(7) ? console.log("isPrime") : console.log("is not prime");

//string is a palindrome
// function isPalindrome(num) {
//   console.log(num);
//   let reversed = num.split("").reverse().join("");
//   console.log(reversed);
//   if (reversed === num) return true;
//   else return false;
// }
// console.log("string is palindrome :", isPalindrome("12321"));

//write a function sort the spelling in any word
// function sortAlphabate(str) {
//   console.log(str);
//   let sortStr = str.split("").sort().join("");
//   console.log(sortStr);
// }
// sortAlphabate("radhika");

//capitalize the first letter of each word
// const str = "my name is radhika agarwal";
// const split = str.split(" ");
// let capitalize = split.map((str) => {
//   return str.charAt(0).toUpperCase() + str.substring(1);
// });
// console.log("Capitalize value :", capitalize.join(" "));

// function alphabateCount(str) {
//   let occurance = {};
//   let split = str.split("").map((e) => {
//     if (occurance.hasOwnProperty(e) === false) {
//       occurance[e] = 1;
//     } else {
//       occurance[e]++;
//     }
//   });
//   return occurance;
//   console.log(split);
// }
// console.log(alphabateCount("radhika"));

// function occ(str) {
//   let output = str.split("").reduce((acc, curr) => {
//     if (acc[curr]) {
//       acc[curr] = acc[curr] + 1;
//     } else {
//       acc[curr] = 1;
//     }
//     return acc;
//   }, {});
//   return output;
// }
// console.log(occ("mynameisradhika"));

// loop an array and add all members of it

// function add(arr) {
//   let arrMap = arr.reduce((acc, curr) => {
//     return (acc = acc + curr);
//   }, 0);
//   return arrMap;
// }
// console.log(add([1, 2, 3, 4, 7, 5, 6, 8]));

//frequent numbers

// function frequent(num) {
//   let occurance = {};
//   let occMap = num.map((val) => {
//     if (occurance.hasOwnProperty(val)) occurance[val]++;
//     else occurance[val] = 1;
//   });
//   let ans = Object.keys(occurance).reduce((acc, curr) => {
//     return occurance[acc] > occurance[curr] ? acc : curr;
//   });
//   return ans;
// }
// console.log(frequent([1, 4, 3, 4, 4, 4, 5, 6, 6, 7, 6, 1, 2, 4, 5, 6]));

// Write a sum method which will work properly when invoked using either syntax below.

// console.log(sum(2, 3)); // Outputs 5
// console.log(sum(2)(3)); // Outputs 5

// function sum(x) {
//   if (arguments.length == 2) {
//     return arguments[0] + arguments[1];
//   } else {
//     return function (y) {
//       return x + y;
//     };
//   }
// }
// console.log(sum(3, 9));
// console.log(sum(3)(9));

// In what order will the numbers 1-4 be logged to the console when the code below is executed? Why?
// (function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//   }, 1000);
//   setTimeout(function () {
//     console.log(3);
//   }, 0);
//   console.log(4);
// })();

// What will the code below output? Explain your answer.
// console.log(0.1 + 0.2);
// console.log(0.1 + 0.2 == 0.3);

// Assuming d is an “empty” object in scope, say: …what is accomplished using the following code?
// var d = {};
// ["zebra", "horse"].forEach(function (k) {
//   d[k] = undefined;
// });
// console.log(d);

// What will the code below output to the console and why?
// var arr1 = "john".split("");
// var arr2 = arr1.reverse();
// var arr3 = "jones".split("");
// arr2.push(arr3);
// console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
// console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

// console.log(1 + "2" + "2");
// console.log(1 + +"2" + "2");
// console.log(1 + -"1" + "2");
// console.log(+"1" + "1" + "2");
// console.log("A" + "B" + "2");
// console.log("A" - "B" + 2);

// console.log(false == "0");
// console.log(false === "0");

// const a = [1, 2, 3];
// a[10] = 99;
// console.log(a[6]);

// sort the function without default method
// arr = [5, 2, 7, 1, 0];
// for (let i = 0; i < arr.length; i++) {
//   console.log(i);
// }
// console.log(arr);

// const arr = [
//   [
//     { a: 1, b: 2 },
//     { a: 1, b: 3 },
//   ],
//   [
//     { a: 5, b: 2 },
//     { a: 2, b: 5 },
//   ],
// ];

// const expectedArray = arr.reduce((acc, array) => {
//   acc.push(...array);
//   return acc;
// }, []);
// console.log(arr);
// console.log(expectedArray);
