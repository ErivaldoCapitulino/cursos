package classes;

public class Data {

	int dia;
	int mes;
	int ano;
	
	String obterDataFormatada() {
//		return dia + "/" + mes + "/" + ano;
		return String.format("%d/%d/%d %n", dia, mes, ano);
	}
}
