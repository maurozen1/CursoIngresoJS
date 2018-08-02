/*Enunciado:
Bienvenidos. 
Pedir por prompt el precio y el porcentaje de descuento, mostrar:
1-El descuento en dinero, 
2-El precio con el descuento , 
3-El IVA 
todos los anteriores en un solo alert 
4-Y solo el precio con descuento más el IVA por id .*/


function mostrar()
{
 var precio;
 var numero;
 var porcentajeDescuento;
 var descuentoEnDinero;
 var precioConDescuento;
 var iva;
 var precioconDescuento_con_iva;
 precio = parseInt(precio);
 porcentajeDescuento = parseInt(porcentajeDescuento);

 precio = prompt("Ingrese precio: ");
 porcentajeDescuento = prompt("Ingrese porcentaje descuento")

 porcentajeDescuento = porcentajeDescuento * 1/100;
 descuentoEnDinero = precio * porcentajeDescuento;
 precioConDescuento = precio - descuentoEnDinero;
 iva = precioConDescuento * 21/100;
 precioconDescuento_con_iva = precioConDescuento + iva;

 alert("Descuento en dinero: "+ descuentoEnDinero +" .El precio con el descuento " + precioConDescuento+
 ". El IVA: "+ iva);
 
 document.getElementById("elPrecioFinal").value = precioconDescuento_con_iva;

 





 
 

 







}
