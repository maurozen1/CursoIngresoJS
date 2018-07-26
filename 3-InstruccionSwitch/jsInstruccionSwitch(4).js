function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
{
    case "Enero":
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto":
    case "Octubre":
    case "Diciembre":
        alert("31 días");
    break;
    case "Febrero":
        alert ("29 días");
    break;
    default:
        alert("30 días");
        
    


}


//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN