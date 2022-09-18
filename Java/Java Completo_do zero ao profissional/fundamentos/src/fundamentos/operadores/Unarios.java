package fundamentos.operadores;

public class Unarios {

	public static void main(String[] args) {
		
		int a = 1;
		int b = 2;
		
		a++;  //a = a + 1
		a--;  //a = a - 1
		
		++b;
		--b;
		
		System.out.println(a);
		System.out.println(b);
		
		System.out.println("Mini Desafio ...");
		System.out.println(++a == b--); // Aqui vai ser true mas depois de passar desse ponto passa a ser falso
										//Devido a precedência
		System.out.println(a);
		System.out.println(b);
	}
}
