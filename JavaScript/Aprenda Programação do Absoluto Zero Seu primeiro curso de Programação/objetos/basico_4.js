const usuario = {
  email: "aluno@gmail.com.br",
};

console.log(usuario.email);
/**
 * Se eu tentar acessar um valor que não foi definido ele vai gerar um resultado undefined
 */
console.log(usuario.nome);

/**
 * É possível criar os atributos de forma dinamica
 */
usuario.nome = "Aluno";
console.log(usuario);
//Resultado:  { email: 'aluno@gmail.com.br', nome: 'Aluno' }
