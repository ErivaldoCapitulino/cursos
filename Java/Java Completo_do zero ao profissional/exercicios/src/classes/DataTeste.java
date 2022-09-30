package classes;

public class DataTeste {

	public static void main(String[] args) {
		
		Data d1 = new Data();
		d1.dia = 28;
		d1.mes = 9;
		d1.ano = 2022;
		
		Data d2 = new Data(1,9,2022);
		
		System.out.println(d1.obterDataFormatada());
		System.out.printf("%d/%d/%d",d2.dia, d2.mes, d2.ano);
	}
}
