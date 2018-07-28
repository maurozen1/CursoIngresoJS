function mostrar()
{

	
	//declarar contadores y variables 
	
	var respuesta= true;
	var numero;
	var acumNegativos = 0;
	var acumPositivos = 0;
	var contNegativos = 0;
	var contadorPositivos = 0;
	var contCeros= 0;
	var contPares;
	var promPositivos;
	var promNegativos;
	var diferencia;
	var flag = false

	diferencia = acumPositivos + acumNegativos

	while(respuesta == true)
	{
		numero = prompt ("Ingresa un numero");
		numero = parseInt (numero);

		if(numero < 0)
	{	
		acumPositivos = acumPositivos + numero;
		contadorPositivos = contadorPositivos + 1;
}
else
{
	if (numero = 0)
{	
	acumNegativos = acumNegativos + numero;
	contNegativos = contNegativos + 1;

} else
{
	contCeros = contCeros + 1;
		
} 

respuesta = confirm ("desea continuar");


	}

	

document.write("1. Suma negativos:"+ acumNegativos + "<br>");





if(contadorPositivos !=0)
	{
		promPositivos = acumPositivos / contadorPositivos
	}
	
	if(contNegativos!=0)
	{
		promNegativos = acumNegativos / contNegativos

	}

	promNegativos =acumNegativos /contNegativos
	promPositivos =acumPositivos /contadorPositivos


}//FIN DE LA FUNCIÓN