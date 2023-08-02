//Symbol()

let id=Symbol("id1"),
 id2=Symbol("id2")

console.log(id===id2);
console.log(id,id2);
console.log(typeof id);

//Tiene que estar creado antes para poder guardar en un objecto

const NOMBRE = Symbol();

const persona = {
	[NOMBRE]: "Ion"
}

console.log(persona)

persona.NOMBRE = "Joaquin Contreras";

console.log(persona);
console.log(persona.NOMBRE);
console.log(persona[NOMBRE]);


//Creacion de un método: 

const SALUDAR=Symbol()

persona[SALUDAR] = function(){
	console.log(`Hola`);
}

persona[SALUDAR]

console.log(persona);
persona[SALUDAR]();

//No se pueden iterar las propiedades privadas con un for:

for(let i in persona){
	console.log(i);
	console.log(persona[i]);
}	

//Para ver las propiedades privadas:

console.log(Object.getOwnPropertySymbols(persona));