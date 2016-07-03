function Mostrar()
{
//tomo la edad  
var laEdad = document.getElementById('edad').value;
var elEstadoCivil = document.getElementById('estadoCivil').value;

if(laEdad < 18)	{
	if(elEstadoCivil <> soltero){ //revisar esta linea
		alert("Es muy pequeño para no ser soltero");
	}

}
	


}//FIN DE LA FUNCIÓN