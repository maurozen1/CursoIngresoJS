/*Al presionar el botón pedir números hasta que el usuario quiera, 
mostrar el número máximo y el número mínimo.*/

function mostrar()
{

	var contador = 0;
	var numero;
	var maximo;
	var minimo;
	var respuesta = 'si';
	var flag= true;

	while(respuesta != 'no')
	{
		contador++
		numero = parseInt(prompt("Ingrese número"))
		if(flag){
			flag = false;
			maximo = numero
			minimo = numero
		} else if(numero> maximo){
			
			maximo = numero;
		}else {

			minimo = numero;

		}

		}
		respuesta = prompt("¿Desea continuar?")
	}




}//FIN DE LA FUNCIÓN