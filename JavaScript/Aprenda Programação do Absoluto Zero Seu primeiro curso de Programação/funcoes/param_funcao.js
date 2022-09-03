function somar(a, b, c, d) {
  return a + b + c + d;
}

// O que acontece se eu não chamar todos os parametros
console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3)); // Nesse caso volta um NaN
console.log("FIM!");

// É possível usar parametros padrão
