function Mostrar()
{
//tomo la edad  
var laEdad = document.getElementById('edad').value;		
/* Funcion: (echo por mi) con un if dentro de otro
if(laEdad <= 17){
if(laEdad >= 13){
	alert("Usted es adolescente");
}	

}	*/												
//Clase: && y. Para juntar 2 condiciones
if(laEdad >=13 && laEdad <=17){
	alert("Usted es adolescente");
}

}//FIN DE LA FUNCIÓN