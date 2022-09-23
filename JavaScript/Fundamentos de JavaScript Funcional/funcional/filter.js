const numbers = [1, 2, 3, 4, 5, 6];

// const numbersV2 = numbers.filter((el) => el < 3);
// console.log(numbersV2);

const greaterThanZero = (el) => el > 0;
const greaterThanTen = (el) => el > 10;
const even = (el) => el % 2 === 0;

console.log(numbers.filter((el) => el > 0));
console.log(numbers.filter(greaterThanZero));
console.log(numbers.filter(greaterThanTen));
console.log(numbers.filter(even));

const students = [
  { name: "jake", score: 6.4 },
  { name: "Susan", score: 8.6 },
  { name: "Emma", score: 9.4 },
  { name: "Peter", score: 9.1 },
];

const gretStudent = (student) => student.score >= 9;
console.log(students.filter(gretStudent));
console.log(students);
