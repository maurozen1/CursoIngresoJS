function mostrar()
{
var precio;
var numero;
var descuento = numero * 1/100;
var precioDescuento;
precio = parseInt(precio);
descuento = parseInt(descuento);
numero = parseInt(numero);

precio = prompt("Ingrese el precio");
descuento = prompt("Ingrese el porcentaje de descuento");

precioDescuento = precio - descuento;

document.getElementById("elPrecioFinal").value = precioDescuento;







}
