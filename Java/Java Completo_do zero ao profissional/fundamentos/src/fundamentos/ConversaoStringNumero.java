package fundamentos;

import javax.swing.JOptionPane;

public class ConversaoStringNumero {

	public static void main(String[] args) {
		//Essa conversão normalmente não é feita
		
		String valor1 = JOptionPane.showInputDialog("Digite o primeiro número: ");
		String valor2 = JOptionPane.showInputDialog("Digite o segundo número: ");	
		
		System.out.println(valor1 + valor2);
	}
}
