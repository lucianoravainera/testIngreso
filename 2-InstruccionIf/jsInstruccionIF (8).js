/*Al ingresar una edad menor a 18 años y 
un estado civil distinto a "Soltero", NO HACER NADA, 
pero si no es asi, y es soltero y no es menor,
 mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/
function Mostrar()
{
//tomo la edad  
var laEdad = document.getElementById('edad').value;
var elEstadoCivil = document.getElementById('estadoCivil').value;
	if(laEdad >= 18 && elEstadoCivil == "Soltero") {
alert("Es soltero y no es menor");
}


}//FIN DE LA FUNCIÓN