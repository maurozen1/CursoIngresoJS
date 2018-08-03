function mostrar()
{
var dia;

dia = prompt("Ingresar dia de la semana");
dia = dia.toLocaleLowerCase();
switch(dia)
    {
        case "sabado":
        case "domingo":
            alert("buen finde");
        break;
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            alert("a trabajar")
        break;
        default:
            alert("Ingrese un dia valido");
        break;
    }

}
