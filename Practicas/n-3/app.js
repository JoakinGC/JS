/*
6- Crear dos inputs de nùmeros y un boton, al pulsar el boton mostrar en un alert quien es el mayor de los dos.

7- Crear un boton que al pulsarlo genere una listade 10 nùmeros aleatorios en un select vacio. Al pulsar de nuevo, se reseteara la lista.

*/

//Ejercicio 6:

const inp1 = document.getElementsByName("numero1");
const inp2 = document.getElementsByName("numero2");
const boton = document.getElementsByName("comparacion");
var mensaje1 = "Es mayor";
var mensaje2 = "Es menor";
function numeroAleaotrio(){
	const inp1= inp1.//metdo para cambiar de string a numero
	if(inp1<inp2){
	
		console.log(`${mensaje1}${inp2} que ${inp1}`);
	
	}else if(inp2<inp1){
	
		console.log(`${mensaje1} ${inp1} que ${inp2}`);
	
	}else if(inp1==inp2){
	
		console.log(`Son iguales${inp2} que ${inp2}`);
	
	};
};  