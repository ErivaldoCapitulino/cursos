const numeros = [10, 20, 30];

function praCadaElemento(elemento, indice, array) {
  console.log(elemento, indice, array);
}
numeros.forEach(praCadaElemento);

numeros.forEach(function (el) {
  console.log(el);
});

numeros.forEach(function (_, i) {
  console.log(i);
});
