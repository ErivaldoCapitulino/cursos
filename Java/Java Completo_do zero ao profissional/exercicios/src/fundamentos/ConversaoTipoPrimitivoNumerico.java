package fundamentos;

public class ConversaoTipoPrimitivoNumerico {

	public static void main(String[] args) {
		
		double a = 1; // int para double
		System.out.println(a);
		
		float b = (float) 1.0; // conversão explícita (CAST)
		System.out.println(b);
		
		int c = 4;
		byte d = (byte)c; //explícita (CAST)
		System.out.println(d);
		
		double e = 1.5;
		int f = (int) e; //explícita (CAST) pode perder valores
		System.out.println(f);
	}
}
