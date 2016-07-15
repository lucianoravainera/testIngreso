function Mostrar()
{
	//alert('iteración while');	
var contador = 0;
while(1) {
	contador = contador + 1;
	if(contador == 3){
		continue; //a partir del continue saltea el resto y vuelve al while con el contador como estaba.
					}
	alert("while " + contador);
	if(contador == 6){
		break; // el break nos saca del while.
					}
	alert("fin" + contador);									
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

	/*
//while(contador < 3){
while(true){
	alert("interacion while " + contador);
//contador = contador + 1; //primero sumo despues pregunto si llego a 3 con el if
	if(contador == 3){
			break;
					}
		contador = contador + 1; // primero pregunto si llego al 3 y despues sumo al contador
				}				
*/