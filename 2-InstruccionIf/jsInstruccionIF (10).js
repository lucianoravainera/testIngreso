/*Al presionar el Botón, asignar una nota RANDOM
 al examen y mostar: "EXCELENTE" para notas igual
  a 9 o 10, "APROBÓ" para notas mayores a 4,
   "Vamos, la proxima se puede" para notas menores a 4 */
function Mostrar()
{
//Genero el número RANDOM entre 1 y 10 
var notaRandom = Math.floor((Math.random() * 10) + 1);
if(notaRandom >= 9)	{
	alert("EXCELENTE nota: " + notaRandom);
	}
else{
		if(notaRandom < 4){
		alert("Vamos la proxima se puede, nota: " + notaRandom);	
		}
		else{
			alert("APROBÓ la nota es: " + notaRandom);
		}
	}	

}//FIN DE LA FUNCIÓN