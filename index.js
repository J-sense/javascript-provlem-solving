// 1.Task: Array Filtering and Mapping
// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 35, gender: "male" },
  { name: "Diana", age: 40, gender: "female" },
  { name: "Ethan", age: 45, gender: "male" },
];

const an = () => {
  const result = people
    .filter((pr) => pr.gender !== "female")
    .map((rr) => rr.name);
  console.log(result);
};
an();

// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "আরব্য রজনী", author: "অজানা", year: 1800 },
  { title: "দেবদাস", author: "শরৎচন্দ্র চট্টোপাধ্যায়", year: 1917 },
  { title: "পথের পাঁচালী", author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়", year: 1929 },
  { title: "লালসালু", author: "সৈয়দ ওয়ালীউল্লাহ", year: 1948 },
  { title: "হাজার বছর ধরে", author: "জহির রায়হান", year: 1964 },
];

function getBookTitles(bookArray) {
  const result = bookArray.map((book) => book.title);
  return result;
}
console.log(getBookTitles(books));

// 6. Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
// Example: Happy New Year

function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  if (year % 4 === 0) return true;
  return false;
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2023));

// 7. Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const numbers = [1, 2, 3, 2, 4, 5, 5, 6, 7, 8, 1];

function removeDuplicates(arr) {
  return [...new Set(arr)];
}
const uniqueNumbers = removeDuplicates(numbers);
console.log(uniqueNumbers);

// 08. Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

function findMaxValue(numbers) {
  if (numbers.length === 0) {
    return "empty";
  }
  return Math.max(...numbers);
}

const testNumbers = [5, 9, 2, 7, 3];
console.log(findMaxValue(testNumbers));
