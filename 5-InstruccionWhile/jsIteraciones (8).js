
/*Enunciado:
Al presionar el botón pedir números hasta que el usuario quiera, sumar los que son positivos y multiplicar los negativos.*/


function mostrar()
{	var contador=0;
	var positivo = 0;
	var negativo = 1;
	var numero;	
	var respuesta='si';

	while(respuesta == "si"){

			contador++
			numero = parseInt(prompt("Ingrese una variable"))
			if(numero >= 0 ){

				positivo = positivo + numero;

			} else {

				negativo = negativo * numero;

			}
			respuesta = prompt("Desea continuar?")
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN