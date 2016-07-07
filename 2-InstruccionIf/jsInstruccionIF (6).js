function Mostrar()
{
//tomo la edad  
	var laEdad = document.getElementById('edad').value;
/* FUNCIONA: echo por mi.
	if(laEdad >=18)	{
	alert("Usted es mayor de edad");
	}

	if(laEdad <= 17){
		if(laEdad >= 13){
		alert("Usted es adolescente")
		}	
	}

	if(laEdad <13){
	alert("Usted es un niño");
	} 
*/
// en clase: mejor que el ejemplo anterior.
	if (laEdad < 13){
		alert("es menor");
	}
	else{
		if (laEdad >= 18){
		alert("es mayor");
		}
		else{
			alert("es dolescente");
		}

	}

}//FIN DE LA FUNCIÓN