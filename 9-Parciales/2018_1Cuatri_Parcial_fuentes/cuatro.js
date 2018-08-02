/*Enunciado:
Bienvenidos. 
(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los resto, 
de lo contrario los sumo. 
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y supero el 10".*/


function mostrar()
{
var numero1,numero2;
var suma;
var resta;
numero1 = parseInt(numero1);
numero2 = parseInt (numero2);
suma = parseInt(suma);
 
numero1 = prompt("Ingrese un número");
numero2 = prompt("Ingrese un número");

    if(numero1 == numero2)
    {
        alert(numero1 + numero2);

    }else if(numero1 > numero2)
      {
        resta = numero1 - numero2;
        alert(resta);
      } else if (numero1 < numero2)
      {
          suma = numero1 + numero2;
          alert(suma);
      }else if (suma > 10){

          alert("La suma es "+suma+" supero el 10");
      }

       
    }

