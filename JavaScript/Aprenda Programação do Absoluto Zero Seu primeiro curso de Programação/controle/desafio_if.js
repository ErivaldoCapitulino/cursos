/**
 * Realizar o desafio utilizado a estrutura if sem o else
 *
 * Conceito   |     Faixa de nota correpondente
 * A                Entre 9,0 e 10,0
 * B                Entre 7,0 e 8,9
 * C                Entre 5,0 e 6,9
 * D                Entre 4,5 e 4,9
 * F                Abaixo de 4,5
 */

const nota = 8;

if (nota >= 0 && nota < 4.5) {
  console.log("Conceito F nota " + nota);
}
if (nota >= 4.5 && nota <= 4.9) {
  console.log("Conceito D nota " + nota);
}
if (nota >= 5.0 && nota <= 6.9) {
  console.log("Conceito C nota " + nota);
}
if (nota >= 7.0 && nota <= 8.9) {
  console.log("Conceito B nota " + nota);
}
if (nota >= 9.0 && nota <= 10) {
  console.log("Conceito A nota " + nota);
}
