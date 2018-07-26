function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
        alert("Falta para el invierno");
    break;
    case "Junio":
    case "Julio":
    case "Agosto":
     alert("Abrigate que hace frìo")
    break;
    default:
     alert("Ya pasamos el frìo ahora calor!!!") 



}






}//FIN DE LA FUNCIÓN