/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;

numeroUno = document.getElementById('numeroUno').value;
numeroDos = document.getElementById('numeroDos').value;

var resultado; 
resultado = parseInt(numeroUno) + parseInt(numeroDos);

alert("La suma es: " + resultado);
	}

function restar()
{
numeroUno = document.getElementById('numeroUno').value;
numeroDos = document.getElementById('numeroDos').value;
var resultado; 
resultado = parseInt(numeroUno) - parseInt(numeroDos);

alert("La resta es: " + resultado);
}

function multiplicar()
{ 
numeroUno = document.getElementById('numeroUno').value;
numeroDos = document.getElementById('numeroDos').value;
var resultado; 
resultado = parseInt(numeroUno) * parseInt(numeroDos);

alert("La mutiplicacion es: " + resultado);
}

function dividir()
{
numeroUno = document.getElementById('numeroUno').value;
numeroDos = document.getElementById('numeroDos').value;
var resultado; 
resultado = parseInt(numeroUno) / parseInt(numeroDos);

alert("La division es: " + resultado);
}

