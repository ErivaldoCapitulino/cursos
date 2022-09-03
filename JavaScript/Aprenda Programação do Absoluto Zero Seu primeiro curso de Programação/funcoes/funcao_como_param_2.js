function executar(fn) {
  if (typeof fn === "function") {
    console.log(fn);
  }
}

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

executar(somar(10, 5)); // se a função somar não tiver valores padrão nos parametros ela irá retornar NaN
executar(subtrair());
executar(multiplicar());
