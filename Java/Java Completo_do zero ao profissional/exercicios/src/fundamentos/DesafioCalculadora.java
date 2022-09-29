package fundamentos;

import java.util.Scanner;

public class DesafioCalculadora {

	public static void main(String[] args) {
		
		//Ler num1
		//Ler num2
		//+ - * / %
		double num1 = 0;
		double num2 = 0;
		String operadores = "";
		
		Scanner entrada = new Scanner(System.in);
		System.out.print("Digite o primeiro número: ");
		num1 = entrada.nextDouble();
		
		System.out.print("Digite o segundo número: ");
		num2 = entrada.nextDouble();
		
		System.out.println("Digite qual operação você deseja: ");
		operadores = entrada.next();
		
		double resultado = "+".equals(operadores) ? num1 + num2 : 0;
		resultado = "-".equals(operadores) ? num1 - num2 : resultado;
		resultado = "*".equals(operadores) ? num1 * num2 : resultado;
		resultado = "/".equals(operadores) ? num1 / num2 : resultado;
		resultado = "%".equals(operadores) ? num1 % num2 : resultado;
		
		System.out.printf("%.2f %s %.2f = %.2f", num1, operadores, num2, resultado);
		
		entrada.close();
	}
}
