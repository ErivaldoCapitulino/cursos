// Criando uma variável do tipo array e atribuindo valores

let avgTemp = [];
avgTemp[0] = 31.9;
avgTemp[1] = 35.3;
avgTemp[2] = 42;
avgTemp[3] = 38;
avgTemp[4] = 25.5;

console.log(avgTemp[3]);

// Outra forma de criar um array

let dayOfWeek = new Array(); // Instanciando um array
dayOfWeek[0] = "sunday"; // Atribuindo valores ao array

console.log(dayOfWeek.length);

// é possível também instanciar diretamente na declaração
let dayOfWeek1 = new Array(
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);

console.log(`Tamanho do array ${dayOfWeek1.length}`);
console.log(dayOfWeek1[2]);
