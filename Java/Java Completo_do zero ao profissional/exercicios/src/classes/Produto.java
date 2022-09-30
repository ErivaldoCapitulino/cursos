package classes;

public class Produto {

	String nome;
	double preco;
	double desconto;
	
	Produto(){
		
	}

	Produto(String nomeInicial){
		nome = nomeInicial;
	}
	
	Produto(String nomeInicial, double precoInicial, double descontoIncial){
		nome = nomeInicial;
		preco = precoInicial;
		desconto = descontoIncial;
	}
	
	double precoComDesconto() {
		return preco * (1 - desconto);
	}
}
