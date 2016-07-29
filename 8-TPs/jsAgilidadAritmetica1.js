/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
var resultado;
function comenzar()
{
var numeroUno = Math.floor(Math.random() * 10) + 1;
var numeroDos = Math.floor(Math.random() * 10) + 1;
var operacion = Math.floor(Math.random() * 4) + 1;
switch(operacion)
	{
		case 1:
		document.getElementById('Operador').value = "+";
		resultado = parseInt(numeroUno) + parseInt(numeroDos);
		break;
		case 2:
		document.getElementById('Operador').value = "-";
		resultado = numeroUno - numeroDos;
		break;
		case 3:
		document.getElementById('Operador').value = "*";
		resultado = numeroUno * numeroDos;
		break;
		case 4:
		document.getElementById('Operador').value = "/";
		resultado = numeroUno / numeroDos;
		break;
	}
document.getElementById('PrimerNumero').value = numeroUno;
document.getElementById('SegundoNumero').value = numeroDos;
alert(resultado);
}//FIN DE LA FUNCIÓN
function Responder()
{
if(resultado == respuesta)
	{
		alert("resultado correcto");
	}
else {
		alert("resultado incorrecto");
	}	

}//FIN DE LA FUNCIÓN
