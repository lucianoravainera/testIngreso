/*Al presionar el Botón, mostar
 un número Random del 1 al 10 inclusive */
function Mostrar()
{
//Genero el número RANDOM entre 1 y 10 
//var numeroRandom = Math.floor((Math.random() * 10) + 1);
//alert(numeroRandom);

	/*//funcionamiento de RANDOM: va del 0 al 1 (0,00001 - 0,99999)
	var numero = (Math.random() * 10) + 1; // funcionamiento del random cambiando el * x limito la cantidad
	alert(numero); 
	//de 1 a 10 (*10 +1)/ de 1 a 3 (*3 +1)/ del 20 al 25 (*5 +25)  */


	//sacar las comas: (floor=devuelve la parte entera del numero)
    var numero = Math.floor(Math.random() * 10) + 1);
	alert(numero); 
}//FIN DE LA FUNCIÓN