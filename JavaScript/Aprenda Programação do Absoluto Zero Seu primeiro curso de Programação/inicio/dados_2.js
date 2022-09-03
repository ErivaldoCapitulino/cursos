// anatonia de variaveis   var ou let  + identificador;
// ou var idade = 3;  atribuindo valor

/**
 * É necessário definir bons nomes
 */

let preco = 19.9;
let desconto = 0.4;

// poderia ser com valores literais
console.log(19.9 * 0.6);

// por variaveis
console.log(preco * (1 - desconto));

let precoComDesconto = preco * (1 - desconto);
console.log(precoComDesconto);

// É possível concatenar as variaveis com texto
let nome = "Caderno"; //String -> Sequencia de letras
let categoria = "Papelaria";
console.log(
  "Produto: " +
    nome +
    ", Categoria: " +
    categoria +
    ", Preço: " +
    preco +
    ", Desconto: " +
    desconto
);
