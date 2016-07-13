function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

switch(mesDelAño)
		{
	case "Enero":
		alert("que comeinces bien el año!!!");
	break;
	case "Marzo":
		alert("a clases!!!");
	break;
	case "Julio":
		alert("se vienen las vaciones!!!");
	break;
	case "Diciembre":
		alert("felices fiestas!!!");
	break;

		}



}//FIN DE LA FUNCIÓN

/* ejemplo pizarron	switch(variable){}
switch(mes){
	case  (entero) "1" (string) "Enero".
	case Enero :  //puede estar o no entre {} 
		alert("es verano");
		break;
}

*/