function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
   
//respuesta=prompt("¿Ingresar numero? si/no");

while(respuesta != 'no')
{

	contador=contador + 1;
	numero = prompt("ingrese numero: " + contador);
	//validacion isNaN para validar si lo ingresado es o no un numero:
	while(isNaN(numero) == true )
	{
			numero = prompt("error, ingrese numero: " + contador);
			}
	acumulador = acumulador + parseInt(numero);
	
}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
 
}//FIN DE LA FUNCIÓN
// hacer: tp 12, 5tp, 7 tp, 9 tp, 11 tp.
//clase que viene ejercicios de iteraciones (while) con for y despues vemos for 