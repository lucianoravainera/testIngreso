function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
//alert (mesDelAño);
	switch(mesDelAño){
		case "Febrero":
			alert("Este mes NO tiene mas de 29 dias.");
		break;
		default:
			alert("Este mes tiene mas de 29 dias.");

					}

	


}//FIN DE LA FUNCIÓN