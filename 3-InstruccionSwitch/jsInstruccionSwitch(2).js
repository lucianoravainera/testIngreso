function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value; //junio -septiembre
switch(mesDelAño){
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
		case "Septiembre":
			alert("Abrigate que hace frio");
		break;	
		case "Octubre":
		case "Noviembre":
		case "Diciebre":
			alert("ya paso el frio, ahora calor!!!");
		break;	


				}





}//FIN DE LA FUNCIÓN