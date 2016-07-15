function Mostrar()
{
	//alert('iteración while');	
var contador = 0;
//while(contador < 3){
while(true){
	alert("interacion while " + contador);
//contador = contador + 1; //primero sumo despues pregunto si llego a 3 con el if
	if(contador == 3){
			break;
					}
		contador = contador + 1; // primero pregunto si llego al 3 y despues sumo al contador
				}				

}//FIN DE LA FUNCIÓN
 
 /* explicacion en clase
 contadores, inicializar contadores: var contador = 0;
contador: contador = contador + 1;
  
 */

 /*       //ejemlo de interacion con IF (asi no se hace!!!)	
var contador = 0;
if(contador < 10){
	alert("interacion while " + contador);
contador = contador + 1;
				}
if(contador < 10){
	alert("interacion while " + contador);
contador = contador + 1;
				}
if(contador < 10){
	alert("interacion while " + contador);
contador = contador + 1;
				}
if(contador < 10){
	alert("interacion while " + contador);
contador = contador + 1;
				}
*/		