package fundamentos;

public class PrimitivoVsObjetos {

	public static void main(String[] args) {
		
		//Tipo objeto usamos notação ponto
		String s = "texto";
		s.toUpperCase();
		
		//Primitivo não tem a notação ponto mas podemos usar os Wrappers para ter esse comportamento
		//Wrappers são a vesão objeto dos tipos primitivos
		int a = 123;
		
		System.out.println(a);
	}
}
