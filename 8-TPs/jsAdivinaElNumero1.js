/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
//Genero el número RANDOM entre 1 y 100
numeroSecreto = Math.floor((Math.random() * 100) + 1);	
contadorIntentos = 0;
	//alert(numeroSecreto );

}//FIN FUNCION COMENZAR

function verificar()
{
var numeroIngresado = document.getElementById('numero').value;
contadorIntentos = contadorIntentos + 1;
while (numeroSecreto == numeroIngresado)
	{
		alert("Usted es un ganador!! y en solo "+contadorIntentos+" intentos.");
	break;
	}//fin while
while (numeroSecreto != numeroIngresado) 
	{
		if(numeroIngresado > numeroSecreto) 
		{
			alert("se paso del numero secreto");
		}//fin if >
		else
		{
			alert("falta para el numero secreto");
		}//fin else <
	break;
	}//fin while


}//FIN FUNCION VERIFICAR