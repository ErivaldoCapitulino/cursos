package controle;

public class SwitchSemBreak {

	public static void main(String[] args) {

		String faixa = "vermelho";

		switch (faixa.toLowerCase()) {

		case "preta":
			System.out.println("Sei o Bassai-Dai...");
		case "marrom":
			System.out.println("Sei o Tekki Shodan");
		case "roxa":
			System.out.println("Sei o Heian Godan");
		case "verde":
			System.out.println("Sei o Heian Yodan");
		case "laranja":
			System.out.println("Sei o Heian Sedan");
		case "vermelho":
			System.out.println("Sei o Heian Nidan");
		case "amarelo":
			System.out.println("Sei o Heian Shodan");
//		default:
//			System.out.println("Não sei nada");
			
		}
		
		System.out.println("Fim!");
	}
}
