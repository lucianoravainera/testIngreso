/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
sueldo = document.getElementById('sueldo').value;
var resultado;
resutlado = parseInt(sueldo) * 1.10 ;
document.getElementById('resultado').value = resutlado;

//var saldo = 100;
//var resultado;
//resultado = 100 * 1.25;
//alert(resultado);

}
