/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
sueldo = document.getElementById('sueldo').value;
var resultado1;
resutlado1 = parseInt(sueldo) + (sueldo / 100 + 10)
document.getElementById('resultado').value = resultado1;

}
