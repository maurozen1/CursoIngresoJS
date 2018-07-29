/*Enunciado:
al presionar el botón pedir un número entre 0 y 9 inclusive.*/

function mostrar()
{

	var numero = prompt("Ingrese un número entre 0 y 9.");
	numero = parseInt (numero);
	

	while(numero<0 || numero>9){

		numero = prompt("Número incorrecto,por favor ingrese número entre 0 y 9");
	}
	
	document.getElementById("Numero").value = numero;


}//FIN DE LA FUNCIÓN