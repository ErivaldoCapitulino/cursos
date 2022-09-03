const x = 123;
let y = 321;
var z = 323;
/**
 * Armazenar uma função dentro de uma variável.
 */
// function somar(a, b) {
//   return a + b;
// }

const somar = function (a, b) {
  return a + b;
};

console.log(somar(x, y));
