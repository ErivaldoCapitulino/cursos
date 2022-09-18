package fundamentos.operadores;

import java.util.Scanner;

public class TipoStringEquals {

	public static void main(String[] args) {
		
		System.out.println("2" == "2");
		//Nem sempre comparação entre duas string dão verdadeiras
		
		String s = new String("2");
		System.out.println("2" == s); // Nessa comparação dá falso para isso é necessário usar equals
		System.out.println("2".equals(s)); //equals compara o conteúdo
		
		Scanner entrada = new Scanner(System.in);
		System.out.println("Digite um valor");
		String s2 = entrada.next();
		System.out.println("2" == s2);
		System.out.println("2".equals(s2));
		entrada.close();
	}
}
