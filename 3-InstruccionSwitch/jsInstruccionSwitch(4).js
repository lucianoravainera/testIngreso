function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
switch(mesDelAño){
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 dias.");
		break;
		case "Febrero":
			alert("Este mes tiene 29 dias.");
		break;
		default:
			alert("Este mes tiene 30 dias");
			 }
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN