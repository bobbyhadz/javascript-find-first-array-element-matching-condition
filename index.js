// EXAMPLE 1 - Find the First Array Element matching a Condition in JavaScript

const arr = [1, 2, 3, 4, 5];

const result = arr.find(element => {
  return element > 2;
});

console.log(result); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 2 - Find the First Array Element matching a Condition using `for...of`

// const arr = [1, 2, 3, 4, 5];

// let result;

// for (const element of arr) {
//   if (element > 2) {
//     result = element;
//     break;
//   }
// }

// console.log(result); // 👉️ 3

// ------------------------------------------------------------------

// // EXAMPLE 3 - Find the First Array Element matching a Condition using `for`

// const arr = [1, 2, 3, 4, 5];

// let result;

// for (let index = 0; index < arr.length; index++) {
//   if (arr[index] > 2) {
//     result = arr[index];
//     break;
//   }
// }

// console.log(result); // 👉️ 3
