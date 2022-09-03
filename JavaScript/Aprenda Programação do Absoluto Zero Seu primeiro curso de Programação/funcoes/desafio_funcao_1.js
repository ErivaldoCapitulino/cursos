/**
 * Receber 2 parametros -> console.log(+)
 * "" -> console.log(-)
 * exemplo de alguns valores
 * ...(3,4)
 * ...(31,98)
 */

const a = 3;
const b = 4;

function somar(a, b) {
  console.log(`${a} + ${b} = ${a + b}`);
}

function subtrair(a, b) {
  console.log(`${a} - ${b} = ${a - b}`);
}

somar(a, b);
subtrair(a, b);
