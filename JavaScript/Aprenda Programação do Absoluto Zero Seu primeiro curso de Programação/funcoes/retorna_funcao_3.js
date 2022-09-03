// function produto(a) {
//   return function (b) {
//     return a * b;
//   };
// }

const produto = (a) => (b) => (c) => a * b + c;

const dobro = produto(2)(3);
console.log(dobro(8));
console.log(produto(2)(8)(4));
