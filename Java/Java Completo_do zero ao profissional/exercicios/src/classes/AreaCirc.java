package classes;

public class AreaCirc {

	double raio;
	final static double PI = 3.14; //Pertence a classe
	
	AreaCirc(){
		
	}
	
	AreaCirc(double raioInicial){
		raio = raioInicial;
	}
	
	double area() {
		return PI * (raio * raio);
	}
	
}
