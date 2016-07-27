function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
while(contador <5)
{
	contador=contador + 1;
	numero = prompt("ingrese numero: " + contador);
	//validacion isNaN para validar si lo ingresado es o no un numero:
	while(isNaN(numero) == true){
			numero = prompt("ingrese numero: " + contador);
			}
	acumulador = acumulador + parseInt(numero);
}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN