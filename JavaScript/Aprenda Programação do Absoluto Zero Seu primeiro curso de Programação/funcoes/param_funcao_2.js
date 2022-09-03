// Usando valores padrão para os parametros

function somar(a, b, c = 0, d = 0) {
  // c,d com valor padrá
  return a + b + c + d;
}

console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3));
console.log(somar(1, 2));

// se passar mais parametros ele vai ignorar os demais parametros mais isso dificilmente acomtece na prática
console.log(somar(1, 2, 3, 4, 5, 6));
