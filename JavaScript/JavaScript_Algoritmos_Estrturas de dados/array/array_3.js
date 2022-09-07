//Acessando todos os elementos de um array

let dayOfWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//Utiliza-se uma estrutura de repetição
for (let i = 0; i < dayOfWeek.length; i++) {
  console.log(dayOfWeek[i]);
}

// Outro exemplo utilizando o fibonacci
let fibonacci = [];
fibonacci[0] = 0;
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
  fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
console.log(fibonacci);

for (let i = 0; i < fibonacci.length; i++) {
  console.log(fibonacci[i]);
}
