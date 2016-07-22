/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 var edad = prompt("ingrese edad", "entre 18 y 90 años");
 while(edad <18 || edad >90)
 	{
 	edad = prompt("INGRESE EDAD VALIDA entre 18 y 90 años");   // si se carga letra carga igual??
 	}//FIN WHILE EDAD
document.getElementById('Edad').value = edad;
//FIN EDAD
var sexo = prompt("ingrese sexo m=masculino o f=femenino.");
while(sexo != "f" && sexo != "m") 
	{
		sexo = prompt("ingrse un dato valido m=masculino o f=femenimo.");
	}//FIN WHILE SEXO
	switch(sexo)
		{
		case "f":
		document.getElementById('Sexo').value = "femenimo";
		break;
		case "m":	
		document.getElementById('Sexo').value = "masculino";
		break;
		}
//FIN SEXO



}//FIN FUNCION (ComenzarIngreso)
