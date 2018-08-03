/*Enunciado:
Bienvenidos. 
(IF)Pedir dos números y mostrar el resultado: 
Si son iguales los muestro concatenados. 
Si el primero es mayor, los divido, 
de lo contrario los sumo. 
Si la suma es menor a 50 ,además de mostrar el resultado, muestro el mensaje 
"la suma es xxx y es menor a 50".*/

function mostrar()
{
    var numero1, numero2, division, suma;
    numero1 = prompt("Ingrese un número.");
    numero1 = parseInt(numero1);
    numero2 = prompt("Ingrese un número.");
    numero2 = parseInt(numero2);
    suma = numero1 + numero2;

    if (numero1 == numero2) {
        alert("Los numeros ingresados son "+ numero1 +" y "+numero2);
    } else {
          if (numero1 > numero2) {
            division = numero1 / numero2;
            division = parseInt(division);
            alert("La división es : "+ division);
        } else {
            if (numero1 < numero2 && suma < 50){
                alert("La suma es: "+suma+" y es menor a 50");
            } else{
                alert("La suma es: "+ suma);
            }

        }
    }

}
