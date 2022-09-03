const notas = [7, 8, 3, 5, 10, 9, 8, 8];

// usando o foreach para percorrer o array
let valores = "";

//com of percorre os elementos
for (let nota of notas) {
  valores += nota + " ";
}

let indices = "";

//com in pecorre os indices
for (let indice in notas) {
  indices += indice + " ";
}

console.log(valores);
console.log(indices);
