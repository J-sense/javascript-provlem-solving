// function findMax(num) {
//   let max = num[0];
//   for (let i = 1; i < num.length; i++) {
//     if (num[i] > max) {
//       max = num[i];
//     }
//   }
//   return max;
// }
// const result = findMax([2, 4, 32, 5, 3, 2]);
// console.log(result);

// const turnIntoReverseString = (str) => {
//   const result = str.split("").reverse().join("");
//   return result;
// };
// const result = turnIntoReverseString("string");
// console.log(typeof result);

// const factorial = (num) => {
//   let result = 1;
//   for (let i = 2; i <= num; i++) {
//     result *= i;
//   }
//   return result;
// };

// console.log(factorial(2));

// ascending by sort()
// const numbers = [2, 2, 3, 2, 4, 3, 6, 0, 8, 4];

// const newNumber = [...numbers].sort((a, b) => a - b);
// console.log(newNumber, numbers);

// lets findinggod

const calculateAverage = (arr) => {
  let sum = 0;
  for (const a of arr) {
    sum = sum + a;
  }
};
const numbers = [10, 20, 30, 40, 50];
console.log(calculateAverage(numbers));
