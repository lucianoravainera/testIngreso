function Mostrar()
{

var contador=0;	
var contadorCero=0;
var contadorUno=0;
var contadorDos=0;
var contadorTres=0;
var contadorCuatro=0;
var contadorCinco=0;
var contadorSeis=0;
var contadorSiete=0;
var contadorOcho=0;
var contadorNueve=0;
var contadorDiez=0;
var limite = 100000;
	for(;;) 
	{
	//console.log(contador);
	contador++;
	if(contador==limite)	
		{
			break;
		}

	var numeroRandom = Math.floor((Math.random() * 10) +0);	

	while(numeroRandom==5 && (contadorCinco)>(limite*0.05)) //limita al numero 5 a salir solo el 5% 
		{
			numeroRandom = Math.floor((Math.random() * 10) +0);
		}

	switch(numeroRandom)
		{
			case 0:
			contadorCero++;
			break;
			case 1:
			contadorUno++;
			break;
			case 2:
			contadorDos++;
			break;
			case 3:
			contadorTres++;
			break;
			case 4:
			contadorCuatro++;
			break;
			case 5:
			contadorCinco++;
			break;
			case 6:
			contadorSeis++;
			break;
			case 7:
			contadorSiete++;
			break;
			case 8:
			contadorOcho++;
			break;
			case 9:
			contadorNueve++;
			break;
			case 10:
			contadorDiez++;
			break;

		}	
	}
	console.log("numero 0: "+ Math.floor(contadorCero/limite *100)+"%");	
	console.log("numero 1: "+ Math.floor(contadorUno/limite *100)+"%");	
	console.log("numero 2: "+ Math.floor(contadorDos/limite *100)+"%");
	console.log("numero 3: "+ Math.floor(contadorTres/limite *100)+"%");
	console.log("numero 4: "+ Math.floor(contadorCuatro/limite *100)+"%");
	console.log("numero 5: "+ Math.floor(contadorCinco/limite *100)+"%");
	console.log("numero 6: "+ Math.floor(contadorSeis/limite *100)+"%");
	console.log("numero 7: "+ Math.floor(contadorSiete/limite *100)+"%");
	console.log("numero 8: "+ Math.floor(contadorOcho/limite *100)+"%");
	console.log("numero 9: "+ Math.floor(contadorNueve/limite *100)+"%");
	//console.log("numero 10: "+ Math.floor(contadorDiez/limite *100)+"%");
}
//el for funciona como el while, lo mejora 
// for(inicio contado;digo hasta cuanto lo hace;cuanto se incrementa;)
//for(contador=0;contador<10;contador++)