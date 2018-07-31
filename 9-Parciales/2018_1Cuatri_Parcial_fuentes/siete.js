function mostrar()

{

    var nombre;
    var edad;
    var sexo;
    var menores = 0;
    var mayores = 0;
    var contHombres = 0;
    var contMujeres = 0;
    var contHombres_mayor_edad = 0;

    nombre = prompt("Ingrese su nombre");

    edad = prompt("Ingrese una edad válida")
    edad = parseInt(edad);
    while(edad >100 || edad < 1 || isNaN(edad) )
    {
        edad = prompt("Ingrese una edad que sea válida");
    }

        sexo = prompt("Ingrese sexo m/f");
    while(sexo !="m" && sexo !="f"){
        sexo = prompt("Ingrese sexo válido")

    }

switch(sexo){
    case "m":
        sexo = "Masculino";
    break;    
    case "f":
        sexo = "Femenino";
}    
if (edad >17){
        mayores++
    } else 
    {
        menores++
    }
}
  if    (sexo == "f") 
  {
        contMujeres++
} else 
    {
        contHombres++
        if(edad >18){
        contHombres_mayor_edad++
    }
    
    
    
}
document.write("Cantidad de hombres:" + contHombres);



