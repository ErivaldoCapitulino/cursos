const produto = {
  nome: "iPad",
  preco: 5600,
  desconto: 0.15,
  //É possível adicionar uma função atribuida em um atributo (variável) dentro de um objeto
  //FORMA ERRADA
  // precoComDesconto: function () {
  //   return preco * (1 - desconto);
  // },

  //FORMA CERTA
  precoComDesconto: function () {
    return this.preco * (1 - this.desconto);
  },
};

console.log(produto.nome);
console.log(produto.precoComDesconto()); //Vai gerar um erro. erro = preco is not defined

/**
 * Foi criado um objeto dentro é possível criar atributos e metodos ou seja as caracteristicas e os comportamentos do objeto
 *this é o objeto que nos permite nos referenciar ao próprio atributo ou metodo é usado o this
 é exatamente por não está configurado no códgio acima que ocorreu o erro.
 */
