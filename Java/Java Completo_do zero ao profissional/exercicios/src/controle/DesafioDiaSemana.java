package controle;

import java.util.Scanner;

public class DesafioDiaSemana {

	public static void main(String[] args) {
		Scanner entrada = new Scanner(System.in);
		
		System.out.println("Digite o dia semana");
		String dia = entrada.next();
		
		if(dia.equalsIgnoreCase("segunda".trim())) {
			System.out.println("Dia da semana: " + 1);
		}
		else if(dia.equalsIgnoreCase("terça".trim())) {
			System.out.println("Dia da semana: " + 2);
		}
		else if(dia.equalsIgnoreCase("quarta".trim())) {
			System.out.println("Dia da semana: " + 3);
		}
		else if(dia.equalsIgnoreCase("quinta".trim())) {
			System.out.println("Dia da semana: " + 4);
		}
		else if(dia.equalsIgnoreCase("sexta".trim())) {
			System.out.println("Dia da semana: " + 5);
		}
		else if(dia.equalsIgnoreCase("sabado".trim())) {
			System.out.println("Dia da semana: " + 6);
		}
		else if(dia.equalsIgnoreCase("domingo".trim())) {
			System.out.println("Dia da semana: " + 7);
		}
		else {
			System.out.println("Dia da semana inválido!");
		}
		
		entrada.close();
	}
}
