package controle;

import java.util.Scanner;

public class DesafioWhile {

	public static void main(String[] args) {

		int i = 0;

		Scanner entrada = new Scanner(System.in);

		while (i == -1) {

			System.out.print("Deseja sair do sistema se sim digite -1 ");
			i = entrada.nextInt();
		}

		entrada.close();
	}
}
