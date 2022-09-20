function logParams(a, b, c) {
  console.log(a, b, c);
}

logParams(1, 2, 3);
logParams(1, 2, 3, 4, 5); //Não gera erro mas ignora os parâmetros a mais
logParams(1, 2); // Os parâmentros que estão faltando vai ser mostrado como underfined

//Definindo valores padrão

function defaultParams(a, b, c = 0) {
  console.log(a, b, c);
}
defaultParams(7, 8, 9);
defaultParams(7, 8);

function logNums(...nums) {
  for (let n of nums) {
    console.log(nums);
  }
}
logNums(1, 2, 3, 4, 5, 6);

function sumAll(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
