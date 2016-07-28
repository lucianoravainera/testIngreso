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
 while(isNaN(edad) || edad <18 || edad >90 )
 	{
 	edad = prompt("INGRESE EDAD VALIDA entre 18 y 90 años");   
 	}//FIN WHILE EDAD
document.getElementById('Edad').value = "Edad: " + edad;
//FIN EDAD
var sexo = prompt("ingrese sexo m=masculino o f=femenino.");
while(sexo != "f" && sexo != "m") 
	{
		sexo = prompt("ingrse un dato valido m=masculino o f=femenimo.");
	}//FIN WHILE SEXO
	switch(sexo)
		{
		case "f":
		document.getElementById('Sexo').value = "Sexo: femenimo";
		break;
		case "m":	
		document.getElementById('Sexo').value = "Sexo: masculino";
		break;
		}//FIN SWITCH SEXO
//FIN SEXO
var estadoCivil = prompt("ingrese estado civil en numeros:"+"\n 1: soltero"+"\n 2: casado"+"\n 3: divorciado"+"\n 4: viudo" );
while(isNaN(estadoCivil) || estadoCivil!="1"&&estadoCivil!="2"&&estadoCivil!="3"&&estadoCivil!="4")
	{
	var estadoCivil = prompt("ingrese estado civil VALIDO en numeros:"+"\n 1: soltero"+"\n 2: casado"+"\n 3: divorciado"+"\n 4: viudo" );
	}//FIN WHILE ESTADO CIVIL
	switch(estadoCivil)
		{
		case "1":
		document.getElementById('EstadoCivil').value = "Estado civil: soltero";
		break;
		case "2":	
		document.getElementById('EstadoCivil').value = "Estado civil: casado";
		break;
		case "3":
		document.getElementById('EstadoCivil').value = "Estado civil: divorciado";
		break;
		case "4":	
		document.getElementById('EstadoCivil').value = "Estado civil: viudo";
		break;
		}//FIN SWITCH ESTADOCIVIL
// FIN ESTADO CIVIL
var sueldoBruto = prompt("Ingrese sueldo bruto mayor a 8000.");
while(isNaN(sueldoBruto) || sueldoBruto < 8000)
	{
		sueldoBruto = prompt("Ingrese sueldo bruto MAYOR a 8000");
	}//FIN WHILE SUELDO BRUTO
document.getElementById('Sueldo').value	="Sueldo bruto: " + sueldoBruto;
//FIN SUELDO BRUTO.	
var numeroLegajo = prompt("ingrese numero de legajo de 4 cifras, sin 0 a la izquierda ");
while(isNaN(numeroLegajo) || numeroLegajo < 1000 || numeroLegajo > 9999)
	{
		numeroLegajo = prompt("ingrese numero de legajo VALIDO de 4 cifras, sin 0 a la izquierda ");
	}//FIN WHILE NUMERO DE LEGAJO
document.getElementById('Legajo').value	="Numero de lagajo: " + numeroLegajo;
//FIN NUMERO DE LEGAJO	
var nacionalidad = prompt("ingrese nacionalidad:"+"\n a: argentino"+"\n e: extranjeros"+"\n n: nacionalizados");
while(nacionalidad!="a" && nacionalidad!="e" && nacionalidad!="n")
	{
	var nacionalidad = prompt("ingrese dato valido:"+"\n a: argentino"+"\n e: extranjeros"+"\n n: nacionalizados");
	}//FIN WHILE NACIONALIDAD
switch(nacionalidad)
		{
		case "a":
		document.getElementById('Nacionalidad').value = "Nacionalidad: argentino";
		break;
		case "e":	
		document.getElementById('Nacionalidad').value = "Nacionalidad: etranjero";
		break;
		case "n":
		document.getElementById('Nacionalidad').value = "Nacionalidad: nacionalizado";
		break;
		}//FIN SWITCH NACIONALIDAD	
//FIN NACIONALIDAD
}//FIN FUNCION (ComenzarIngreso)
