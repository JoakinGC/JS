
/*
4- Crea dos rediobuttons, cuando uno de ellos se seleccione que muestre un men
mensaje diciendo que opcion se selecciono.

5- crear un input y un button, cuando le damos al boton, se añadira el texto que
hemos puesto en el input en un div vacio. Recuerda se añadira el texto, no se
machaca lo que haya en el div 

*/


//ejercicio 4
(function autoejecutable(){
	alert("Hola");
})();

function Opcion(){
	var opciones = document.getElementsByName("eleccion");
	console.log(opciones);
	for(i=0;i<opciones.length;i++){
		console.log(opciones[i]);
		if(opciones[i].checked){
			alert(opciones[i].value); 
		}
	}
};


//ejercicio 5

function anadirTexto(){


	let texto = document.getElementById("texto");
	let mostrar = document.getElementById("mostrar_texto");

	mostrar.innerHTML += texto.value;

};



//El innerHmtl es todo lo que se escribe dentro de la etiqueta div o caja