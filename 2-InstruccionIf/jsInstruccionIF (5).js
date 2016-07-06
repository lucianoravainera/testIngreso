function Mostrar()
{
//tomo la edad  
var laEdad = document.getElementById('edad').value;
/* FUNCION: echo por mi.
if(laEdad >=18)	{
	alert("Usted no es adolescente");
}
if(laEdad <13){
	alert("Usted no es adolscente");
}*/
//en clase: (funciona)
if(laEdad > 12 && laEdad < 18){	

}
else{
	alert("No es adolescente");
}
//en clasae con un if dentro de otro:
/*if(laEdad <= 17){
if(laEdad >= 13){
	//alert("Usted es adolescente");
}	
else{
	alert("Usted no es dolescente");
}
}
else{
	alert("Usted no es dolescente");
}*/

}//FIN DE LA FUNCIÓN