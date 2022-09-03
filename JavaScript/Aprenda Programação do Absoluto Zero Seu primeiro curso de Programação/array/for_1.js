const numeros = [1, 2, 3, 4, 5, 6];
numeros.push(7);
// É muito utilizado o for com o array
// Usando length o array fica mais flexível ou seja posso adicionar elementos no array o laço for continua pegando todos os valores

for (let i = 0; i < numeros.length; i++) {
  console.log(i, numeros[i]);
}
