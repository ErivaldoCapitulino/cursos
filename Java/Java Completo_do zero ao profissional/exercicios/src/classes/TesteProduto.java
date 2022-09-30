package classes;

public class TesteProduto {

	public static void main(String[] args) {
		
		var p1 = new Produto();
		p1.nome = "Bicicleta";
		p1.preco = 650;
		p1.desconto = 0.1;
		
		Produto p2 = new Produto("Notebook");
		p2.preco = 3500.00;
		p2.desconto = 0.2;
		
		Produto p3 = new Produto("Tablet", 800, 0.1);
		
		System.out.println(p1.nome);
		System.out.println(p2.nome);
		System.out.println(p3.nome);
		
		double precoFinal1 = p1.precoComDesconto();
		double precoFinal2 = p2.precoComDesconto();
		double precoFinal3 = p3.precoComDesconto();
		double mediaCarrinho = (precoFinal1 + precoFinal2 + precoFinal3) / 3;
		
		System.out.printf("Média do carrinho = R$%.2f.", mediaCarrinho);
	}
}
