/*Al ingresar una edad menor a 18 años
 y un estado civil distinto a "Soltero", mostrar el siguiente
  mensaje: 'Es muy pequeño para NO ser soltero.'*/
function Mostrar()
{
//tomo la edad  
var laEdad = document.getElementById('edad').value;
var elEstadoCivil = document.getElementById('estadoCivil').value;
/* NO FUNCIONA!!
if(laEdad < 18)	{
	if(elEstadoCivil != soltero){ 
		alert("Es muy pequeño para no ser soltero");
	}

}*/ 
// FUNCIONA!
if(laEdad < 18 && elEstadoCivil != "Soltero") {
alert("es muy pequeño para NO ser soltero");
}

	


}//FIN DE LA FUNCIÓN