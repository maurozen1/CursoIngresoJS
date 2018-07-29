function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(respuesta == "si"){

		contador++
		numero = parseInt(prompt ("Ingrese número"));
		acumulador = acumulador + numero;
		respuesta = prompt("¿Desea seguir sumando?")

	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN