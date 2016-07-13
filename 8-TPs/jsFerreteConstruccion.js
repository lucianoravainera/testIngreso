/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo = document.getElementById('Largo').value;
var ancho = document.getElementById('Ancho').value;
var perimetro;

perimetro = (parseInt(largo) + parseInt(ancho)) * 2;
var cantidadDeAlambre = perimetro * 3;
//alert("perimetro " + perimetro);   prueba 
//alert("cantidad: " + cantidadDeAlambre); prueba
alert("Comprar: " + cantidadDeAlambre + " de alambre.")
}
function Circulo () 
{
var valor = document.getElementById('Radio').value; 	
var radio =(Math.PI * Math.pow(valor,2)) * 3;
alert("Comprar " + radio + " de alambre.");

}
function Materiales () 
{
var largo = document.getElementById('Largo').value;
var ancho = document.getElementById('Ancho').value;	
var area = largo * ancho;
var bolsaCemento = (largo * ancho) * 2;
var bolsaCal = (largo * ancho) * 3;
//alert(bolsaCemento);
//alert(bolsaCal); prueba
alert("se deben comprar: " + bolsaCemento + " bolsas de cemento y " + bolsaCal + " bolsas de cal para un area de: " + area + " M2");
}