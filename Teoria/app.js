console.time("Tiempo de aplicacion");
console.log("Prueba");
let a;
const pi = 3.15;

console.log(pi);


a = "kenai";

console.log(a);
let objecto = {
	nombre: "Jonh",
	edad: 35
}

let colore=["blanco","negro","azul"];
console.log(`${colore}`)
console.log(objecto);

objecto.correo = "joakingcontreras2@gmail.com";
colore.push = "naranja";

console.log(`${colore}`)
console.log(objecto);

//observar en la consola el cambio que tiene si se cambia el let por const


const objecto2 = {
	nombre: "Jonh",
	edad: 35
}

const colores=["blanco","negro","azul"];
console.log(`${colores}`)
console.log(objecto2);

objecto2.correo = "joakingcontreras2@gmail.com";
colores.push = "naranja";

console.log(`${colores}`)
console.log(objecto2);


//console.clear();
console.log("pureba")

//strings.
//Declaracio literal
let nombre = "Joaquin";
let apellido = "  Contreras   ";

//Declaracion Contructor

let hola = new String("   Hola Mundo  ");

console.log(nombre);
console.log(apellido);
console.log(hola);

console.log(
	nombre.length,
	apellido.length,
	hola.lenght,
	nombre.toUpperCase(),
	apellido.toLowerCase(),
	hola.includes("un"),
	apellido.strim,
	hola.strim,
	hola.split(" "),
	hola.split("H")
	);

	

	console.clear();

	let a1 = 2;
	let b1 = new Number(1);
	let c1 = 7.19;
	let d1 = "5.9";

	console.log(a1,b1);
	console.log(c1.toFixed(1));
	console.log(c1.toFixed(5));
	console.log(parseInt(c1));
	console.log(parseFloat(c1));
	console.log(typeof c1, typeof d1);
	console.log(a1 + b1);
	console.log(c1 + d1);
	console.log(a1 + b1);
	console.log(c1 + d1);
	console.log(a1 + b1);


let indefinida;
// es una variable que no esta definida o inicializada.

let nulo = null;
// variable no definida de manera intencional (null)

let noEsUnNumero = "Hola" * 5;
//no es un numero por intentar suar diferentes operaciones aritmeticas con diferentes tipos de datos

console.log(indefinida);
console.log(nulo);
console.log(noEsUnNumero);

//Functions

//Funcion Declarada:

function estoEsUnaFuncion (){
	console.log("uno");
	console.log("dos");
	console.log("tres");
}

function funcionQueDevuelveValores(){
	console.log("uno");
	console.log("dos");
	console.log("tres");
	return "Devuelve un return";
}

//En principio no funciona el return porque ya tiene los console.log al costado
//pero si se define en una variable  y se llama en un console
//se llama en console.log entonces muestra lo que hay en 
// la consola pero no devuelve si pusites el return y algo de
//codigo detras saldra error en el mismo

let devuelve = function funcionQueDevuelveValores(){
	console.log("uno");
	console.log("dos");
	console.log("tres");
	return "Devuelve un return";
}

let devuelve2 = function funcionQueDevuelveValores(){
	console.log("Uno");
	console.log("Dos");
	return "Hasta aca llega";
	console.log("tres");
	return "Devuelve un return";
}

let saludar = function saludar(a="Desconocido",b=0){
	return `Hola ${a} y tu edad es ${b}`;
}

funcionDeclarada()
function funcionDeclarada(){
	console.log("Esta es una funcion que puede ser declarada encualquier parte del codigo ");
}


//Funcion anonima
//Funcion expresado
const funcionExpresada = function(){
	console.log("Esto es una funcion expresada y anonima");
}

//Invocacion de funciones:

console.clear();

estoEsUnaFuncion()

funcionQueDevuelveValores()

console.log(devuelve());

console.log(devuelve2());

console.log(saludar("Joaquin","19"));

console.log(saludar());

funcionDeclarada();

funcionExpresada();

//si intentamos llamar la funcion expresion antes de inicializarla este genera error.


//Arrays:

const a3 = [];
const b3 = ["Hola",2,true,["O","T","R","o"," ","E","L","E","M"]];
console.log(a3);
console.log(b3);
console.log(b3.length);
console.log(b3[0]);
console.log(b3[1]);
console.log(b3[2]);
console.log(b3[3]);
//Se puede buscar dentro del array dentro de otro array:

console.log(b3[3][5]);

// Se puede buscar el array dentro dentro de otro array.
const c3 = [[["Llegamos"]]];
console.log(c3[0][0][0]);

const d3 = Array.of("Elemento cargado","Y","Z",9.8);
console.log(d3);

const e3 = Array(100).fill(false);
console.log(e3);

const colores1 = ["Blanco","negro","Azul"];
console.log(colores1);
colores1.push("Negro");
console.log(colores1);
colores1.pop();
console.log(colores1);


colores.forEach((elemento,posicion) =>{
	console.log(`<li id="${posicion}">${elemento}</li>`);
});

const elements = [
		{
			name: "Joaquin",
			lastname: "Contreras"
		},
		{
			name: "Gaston",
			lastname: "Contreras"
		},
		{
			name: "Dan",
			lastname: "Contreras"
		},
		//element1: "Joa"
		];
		console.log(elements.map((element) =>{ 
			element.name = "Gaston" ;
			return element;
		}));

//Cambia los datos qque hay en las propiedades del array

[1, 2, 3, 4].forEach(function (item) {   
     console.log(item); 
});
// Imprimirá por consola: 1, 2, 3, 4

let numbers = [1, 2, 3, 4].forEach(function (item) {   
     console.log(item); 
});console.log(numbers);
//Te muestra primero el array y despues devuelve que numbers es undefined

var result = [1,2,3,4].map(function (item) { return item * 2; });

console.log(result);// Resultado[2,4,6,8]


function simulateMap(f, items){
    let result = [];
    for (let i = 0;i < items.length;i++){
       result.push(f(items[i]));
    }
    return result;
}
var result = simulateMap(function(item){ return item * 2; }, [1,2,3,4]);

console.log(result)// Resultado[2, 4, 6, 8]

function simulateForEach(f, items){ 
    for(let i = 0;i < items.length;i++){
         f(items[i]);
    }
}simulateForEach(function(item) { console.log(item); }, [1,2,3,4]);


var result = simulateForEach(function (item) {
     console.log(item * 2);
     return item * 2;
}, [1,2,3,4]);// Imprimirá por consola: 2, 4, 6,8


console.log(result);// Devolverá que result es undefined


console.clear();

const b4 = {};
console.log(b4);

const c4 = new Object();
console.log(c4);

const joa = {
	nombre: "Joaquin",
	apellido: "Contreras",
	edad: 19,
	pasatiempo: ["Artes Marciales","Fuerza","Programacion"],
	soltero: false,
	conctato:{
		email: "joakingcontreras2@gmail.com",
		tel: "3546437025",
	},
	saludar: () =>{
		console.log("Hola");
	},
	decirMiNombre: () =>{
		console.log(`Hola me llamo ${this.nombre} ${this.apellido} mi edad es .`);
	}
}
console.log(joa);


console.log(joa["nombre"]);
console.log(joa["apellido"]);

console.log(joa.nombre);


console.log(joa.apellido);
console.log(joa.soltero);

console.log(joa.pasatiempo);
console.log(joa.pasatiempo[0]);

console.log(joa.conctato);
console.log(joa.conctato.tel);

joa.saludar();
joa.decirMiNombre();

//metodos:

console.log(Object.keys(joa));
console.log(Object.keys(joa));

console.clear();

let modulo = 5 % 2;
console.log(modulo);

/* Relacionales:*/

console.log(8 > 9);
console.log(8 < 9);

console.log(8 >= 9);
console.log(9 >= 8);

console.log(7 > 7);
console.log(7 <= 7);

console.log(7 == 7);
console.log("7" == 7);
console.log(0 == false);


console.log(7 === 7);
console.log("7" === 7);
console.log(0 === false);


//Operadores de Decremento:

let i = 1;
i = i +2;
console.log(i);

i = 1;
i+=2;

console.log(i);

i = 1;
i/=3;
console.log(i);

i=1;
i*=3;
console.log(i);

//Operador Unirario.
i=0;

i++;
console.log("Cuando i es solo 0",i);
i=0;
i--;
console.log("Cuando i es solo 0",i);

console.log(!true);
console.log((7 == 7) || ("7" === 7));
console.log((7 == 7) && ("7" === 7));

console.clear();

//condicionales:

let edad = 35;
let edad1 = 17;

if(edad1 > 17){
	console.log("Eres mayor de edad");
}else{
	console.log("Eres menor de edad");

}

if (edad1 >= 18) {
	console.log("Eres mayor de edad");
}else{
	console.log("Eres menor de edad");
}

if(edad > 17){
	console.log("Eres mayor de edad");
}else{
	console.log("Eres menor de edad");

}

if (edad >= 18) {
	console.log("Eres mayor de edad");
}else{
	console.log("Eres menor de edad");
}

/*
Dejame Dormir: 0hrs - 5hrs.
Buenos Días: 6hrs - 11hrs.
Buenas Tardes: 12hrs - 18hrs.
Buenas Noches: 19hrs - 23 hrs */

let hora = 20;
if(hora >=0 && hora<=5){
	console.log("Dejame Dormir");
}else if(hora >= 6 && hora<=11){
	console.log("Buenos Días");
}else if(hora >=12 && hora<=18){
	console.log("Buenas Tardes");
}else{
	console.log("Buenas Noches.");
}


//Operador Temerario:

let eresMayor = (edad < 18) ? "Eres Menor de Edad":"Eres mayor de edad";
let eresMayor1 = (edad1 < 18) ? "Eres Menor de Edad":"Eres mayor de edad";
console.log(eresMayor, eresMayor1);


/*
domingo = 0
lunes = 1
martes =  2
miercoles = 3
jueves = 4
viernes = 5
sabado = 6

*/

let dia = 2;

switch(dia){
	case 0:
		console.log("Domingo");
	break;
	case 1:
		console.log("Lunes");
	break;
	case 2:
		console.log("Martes");
	break;
	case 3:
		console.log("Miercoles");
	break;
	case 4:
		console.log("Jueves");
	break;
	case 5:
		console.log("Viernes");
	break;
	case 6:
		console.log("Sabado");
	break;
	default:
		console.log("El día no existe");
	break;
}


//bucles

console.clear();

let contador = 0;
while(contador<=10){
	console.log("Mi iteracion",contador);
	contador++;
}

do{
	console.log("Mi iteracion de bucle do es:#",contador);
	contador++;
}while(contador<=10)

//for

for(i=0;i<=10;i++){
	console.log(`La iteracion #${i}`);
}

let arreglo = [10,20,30,40,50,60,70,80,90,100];


for(i=0;i<=arreglo.length;i++){
	console.log(`Bucle de for elemento de array #${arreglo[i]}`);
}

//for in
const obj = {
	name: "Joaquin",
	lastname: "Contreras",
	years: 19
}

for(const index in obj){
	console.log(`key: ${index}. Value:${obj[index]}` );
}



for(const index of arreglo){
	console.log(index);
}

const a5 = "Mucho texto";

for(const index of a5){
	console.log(index);
}


console.clear()

//Manejo de errores:


//no existe;  si la variable no existe la hubieramos definido fuera
//try-catch-finally si mostraria el tipico error de error de sintaxis.

try{
	console.log("Aca se coloca el codigo a evaluar");
	noExiste;
	console.log("Segundo mensaje del try");
}catch(error){
	console.log("cath captura cualquier error surgido o lanzado en el try");
	console.log(error);
}finally{
	console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch");
}

try{
	let numero2 = "y";
	if(isNaN(numero2)){
		throw new Error("No es un número");
	}
	console.log(numero2*numero2);
}catch(error){
	console.log("Se produjo el erro:",error);

}


console.clear();

// Break and Continue

const numeros1=[1,2,3,4,5,6,7,8,9,0];

for(i=0;i<numeros1.length;i++) {
	if(i===5){
		continue;
		
	}
	console.log(numeros1[i]);
}

console.log("#########");
for(i=0;i<numeros1.length;i++) {
	if(i===5){
		break;
		
	}
	console.log(numeros1[i]);
}


console.clear();
//Desfructaración:


console.log("Sin destructuracion");
//La asignacion de las posiciones de las variables dentro del array sin usar "DESTRUCTURACIÓN"
const numeros3 = [1,2,3];
//Para saber el poocionamiento de cada elmento dentro del array
let cero = numeros3[0],
uno = numeros3[1],
dos =  numeros3[2];

console.log(cero,uno,dos);


console.log("Con destructuracion");
// Con destructución:

const [one,two,three] = numeros3;
console.log(one,two,three);

// Con destructución pero en objectos
const obj1 = {
	name: "Joaquin",
	lastname: "Contreras",
	age: "19"
};

/*Para que funcione las variables deben tener el mismo nombre que las 
que las propiedades del objecto sino arrojara error 

*/

let {name,lastname,age,edad3} = obj1;
console.log(name,lastname,age,edad);


//Objectos literales

console.clear();

let nombre4 = "Lleni",
edad4 = 5,
raza4 ="caniche";

const obj2 = {
	nombre: nombre4,
	edad: edad4,
	raza: raza4,
	ladrar: () =>{
		console.log("wau wau");
	}
}

console.log(obj2);
obj2.ladrar();

const obj3 = {
	nombre4,
	edad4,
	raza4,
	ladrar() {
		console.log("Wau,wau");
	}
}
console.log(obj3);
obj3.ladrar();


console.clear();

//Parametros REST:

function sumar(a,b,...c){
	let resultado = a + b;
	c.forEach( (n) =>{
		resultado+=n;
	})

	return resultado;
}

console.log(sumar(1,2));
console.log(sumar(1,2,3));
console.log(sumar(1,2,3,4));

const array1=[1,2,3,4],
array2 = [5,6,7,8,9,0];

const array3=[array1,array2];
console.log(array3);
console.log("Array con parametro EXPRESS")
array3.pop();
array3.pop();
array3.push(...array1);
array3.push(...array2);
console.log(array3);


console.clear();

//Arrays functions

const saludar2 = nombre => console.log(`Hola ${nombre}`);

saludar2("Joaquin");

//funcion normal:

const sumar2 = function(a,b,...c){
	let resultado = a + b;

	c.forEach(n =>{
		resultado+=n;
	})
	return resultado;
}

console.log(sumar2(4,5,6,7));

const sumar1 = (a,b) => a + b;
console.log(sumar1(1,2));

const funcionConVariasLineas = () =>{
	console.log("Uno");
	console.log("Dos");
	console.log("Tres");
}

funcionConVariasLineas();

//Ejemplo de uso de método con arrow Funtion:

const array4 = [1,2,3,4,5];

array4.forEach((elemento,indice) =>{
	console.log(`El elemento es: ${elemento} y su posicion es:${indice}`);
})

console.clear();

//Prototipos

/* POO:

	Clases: Modelo a seguir
	Objecto: Es una intacia de una clase
		atributo: Caracteristica o propiedad del objecto
		Métodos: Acciones que un objecto pueden realizar
*/

const obj4 = {
	name: "Joaquin",
	hablar(){
		console.log("Hablo como persona");
	}
}
//Para eso existen las clases para no tener que repetir los mismo obecjtos
const obj5 = {
	name: "Joaquin",
	hablar(){
		console.log("Hablo como persona");
	}
}

console.log(obj4);
console.log(obj5);

//Funcion Contructora:

function Animal(nombre,genero){
	//atributos
	this.nombre = nombre;
	this.genero = genero;

	//Método
	this.sonar = function(){
		console.log("Hablo como persona");
	}
}


const snoppy = new Animal("Snoppy","Macho"),
lolaBonnny = new Animal("Lola","hembra");
console.log(snoppy);
console.log(lolaBonnny);

//Métodos agregados al prototipo de la funcion constructora

function Animal2(nombre,genero){
	
	this.nombre = nombre;
	this.genero = genero;
}

Animal2.prototype.sonar = function(){
	console.log("Hago sonidos");
}

Animal2.prototype.saludar = function(){
	console.log(`Hola me llamo ${this.nombre}`);
};

const snoppy2 = new Animal2("Snoppy","Macho"),
lolaBonnny2 = new Animal2("Lola","hembra");

console.log(Animal2);
console.log(snoppy2);
console.log(lolaBonnny2);
snoppy2.sonar()
lolaBonnny2.saludar()



snoppy2.saludar();



// Herencia Prototípica:

function Perro(nombre,genero,tamanio){
	this.super = Animal2;
	this.super(nombre,genero);
	this.tamanio = tamanio;
}

//console.log(Perro);

//const hola1 = new Perro("Pepe","Masculino", "2mt");
//console.log(hola1);

//Perro esta herendado de animal:

Perro.prototype = new Animal2();
Perro.prototype.constructor = Perro;

//Sobreescritura de métodos de prototipo Padre en hijo.

Perro.prototype.sonar = function(){
	console.log("Soy un perro y mi sonido es un ladrido");
}
 
// Creacion de una nueva funcion dentro de la funcion constructora de Perro:

Perro.prototype.ladrar = function(){
	console.log("Guauu guauu !!");
}

//Pruebas: 

const pepe = new Perro("Pepe","Masculino", "Mediano");
console.log(pepe);

snoppy2.sonar()
pepe.sonar()
pepe.ladrar()
pepe.saludar()

console.clear();


class Animal3{
	//El construcotr es un métedo especial que se 
	//ejecuta en el momento de instanciar la clase.
	constructor(nombre,genero){
		this.nombre = nombre;
		this.genero = genero;
	}

	//Métodos:
	sonar(){
		console.log("Hago sonidos porque estoy vivo");
	}

	saludar(){
		console.log(`Hola me llamo ${this.nombre}`);
	}

}

const mimy = new Animal3("Mimy","Hembra"),
juan = new Animal3("Juan el caballo","Macho");


console.log(mimy);
console.log(juan);


mimy.saludar();
mimy.sonar();

juan.saludar();
juan.sonar();


class Perro3 extends Animal3{

constructor(nombre,genero,tamanio){
// Con el método super() se manda a llamar 
//el constructor de la clase padre.
	super(nombre,genero);
	this.tamanio = tamanio;
	}
	sonar(){
		console.log("Soy un perro y mi sonido es un ladrido");
	}

	ladrar(){
		console.log("Guauu guauu");
	}
}

const mimy2 = new Perro3("Mimy","Hembra","Pequeño"),
juan2 = new Perro3("Juan el caballo","Macho","Gigante");

console.log(mimy2);
console.log(juan2);

mimy2.sonar();
mimy2.ladrar();
mimy2.saludar();

juan2.sonar();
juan2.saludar();
juan2.ladrar();

console.clear();

//Método Éstatico, getters y setters

class Animal4{

	constructor(nombre,genero){
		this.nombre = nombre;
		this.genero = genero;
	}

	
	sonar(){
		console.log("Hago sonidos porque estoy vivo");
	}

	saludar(){
		console.log(`Hola me llamo ${this.nombre}`);
	}

}

class Perro4 extends Animal4{

constructor(nombre,genero,tamanio){

	super(nombre,genero);
	this.tamanio = tamanio;
	}
	sonar(){
		console.log("Soy un perro y mi sonido es un ladrido");
	}

	ladrar(){
		console.log("Guauu guauu");
	}

//Un método éstatico se puede ejecutar sin
// necesidad de instanciar la clase.

	static queEres(){
		console.log("Los perros somos animales mamiferos que pertenemosa la familia de caninos. Somos consideredos el mejor amigo del hombre");
	}

}

Perro4.queEres();

class Animal5{

	constructor(nombre,genero){
		this.nombre = nombre;
		this.genero = genero;
	}

	
	sonar(){
		console.log("Hago sonidos porque estoy vivo");
	}

	saludar(){
		console.log(`Hola me llamo ${this.nombre}`);
	}

}

class Perro5 extends Animal5{

constructor(nombre,genero,tamanio){

	super(nombre,genero);
	this.tamanio = tamanio;
	this.raza = null;
	}
	sonar(){
		console.log("Soy un perro y mi sonido es un ladrido");
	}

	ladrar(){
		console.log("Guauu guauu");
	}

	static queEres(){
		console.log("Los perros somos animales mamiferos que pertenemosa la familia de caninos. Somos consideredos el mejor amigo del hombre");
	}
//Los setters y getters son métodos especiales que nos permiten establecer
// y obtener los valores de atributos de nuestra clase.
	get getRaza(){
		return this.raza;
	}

	set setRaza(raza){
		this.raza = raza;
	}

}

const juan3 = new Perro3("Juan el caballo","Macho","Gigante");


Perro5.queEres();
console.log(juan3.setRaza);
juan3.setRaza = "Gran Danes"
console.log(juan3.setRaza);



console.clear();

//Objecto Consola y todos sus métodos

console.log(console);
console.warn("Esto es un advertencia");
console.error("Esto es un error");
console.info("Esto es informacion");


console.log("Informacion que mostramos en la consola");

let nombre2="Joaquin",apellido2="Contreras",edad2=19;
console.log(nombre2,apellido2,edad2);
console.log(`Hola mi nombre es ${nombre2} ${apellido2} mi edad es ${edad2}`);
console.log(`Hola mi nombre es  %s %s mi edad es %d`,nombre2,apellido2,edad2);

//console.clear

//console.log(window);
//console.log(document);

//console.dir(window);
//console.dir(document);

console.group("Cursos Talleres");
console.log("Curso de JavaScript");
console.log("Curso de HTML");
console.log("Curso de CSS");
console.groupEnd();

console.groupCollapsed("Cursos Talleres");
console.log("Curso de JavaScript");
console.log("Curso de HTML");
console.log("Curso de CSS");
console.groupEnd();

console.table(Object.entries(console).sort());

const numeros4 = [1,2,3,4,5], vocales=["a","e","i","o","u"];

console.table(numeros4);
console.table(vocales);

const perro = {
	nombre: "Boni",
	raza: "Boxer",
	color: "Cafe"
}

console.table(perro);

console.timeEnd("Tiempo de aplicacion");

console.time("Tiempo de array");
const arreglo1 = Array(100000);

for(i=0;i<arreglo1.length;i++){
	arreglo1[i] = i;
}

console.timeEnd("Tiempo de array");
//console.log(arreglo1);

for (i=0;i<=100;i++){
	console.count("Código for:");
	console.log(i);
}


let x = 1, y=2;

pruebaxY = "Se espera que X siempre sea mas grande que Y";

console.assert(y < x,{pruebaxY});

console.clear();

//Objecto Date()

console.log(Date());


let fecha = new Date();
console.log(fecha);
//Dia del mes
console.log(fecha.getDate());
//Dia de la semana: JavaScript muestra los dias de la semana en números hasta el 7
console.log(fecha.getDay());
//MEs: 0 1 2 3 4 5 6 7 8 9 10 11
console.log(fecha.getMonth());

console.log(fecha.getFullYear());
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
console.log(fecha.getMilliseconds());

console.log(fecha.toString());
console.log(fecha.toDateString());
console.log(fecha.toLocaleString());
console.log(fecha.toLocaleDateString());
console.log(fecha.toLocaleTimeString());
console.log(fecha.toLocaleDateString());
console.log(fecha.getTimezoneOffset());
console.log(fecha.toLocaleDateString());
console.log(fecha.getUTCDate());
console.log(fecha.getUTCHours());

let nacimientoJoa = new Date(2002,6,29);
console.log(nacimientoJoa);

console.clear();

console.log(Math);
console.log(Math.PI);
console.log(Math.abs(-7.8));
console.log(Math.ceil(7.2));
console.log(Math.floor(7.8));
console.log(Math.round(7.5));
console.log(Math.sqrt(81));
console.log(Math.pow(2, 5));
console.log(Math.sign(-7.8));// -1(Negativo) , 0 (0) , 1 (Positivo)
console.log(Math.sign(0));
console.log(Math.sign(7.8));

console.log(Math.round(Math.random() * 1000));

console.clear();

/*El operador cortocircuito de or - Cuando el valor de la izquierda en
 la expresión siempre puede validar a true, es el valor que se
  cargará por defecto.


 El operador cortocircuito de and - Cuando el valor de la izquierda en
  la expresión siempre puede validar false, es un valor que se cargará
   por defecto.*/


//Ahora
function saludar3(nombre="Joaquin"){
	console.log(`Hola ${nombre}`);

}
saludar3()

//Antes se usaban los operadores cortocircuitos:


function saludar4 (nombre){
	nombre = nombre || "Desconocido"
	console.log(`Hola ${nombre}`);
}

saludar4()


//OR
console.log("OR");
console.log("Cadena"||"Valor de la derecha");
console.log(19||"Valor de la derecha");
console.log(true||"Valor de la derecha");
console.log([]||"Valor de la derecha");
console.log({}||"Valor de la derecha");
console.log(-2||"Valor de la derecha");
console.log(false||"Valor de la derecha");
console.log(null||"Valor de la derecha");
console.log(undefined||"Valor de la derecha");
console.log(0||"Valor de la derecha");

//AND
console.log("AND");
console.log("Cadena"&&"Valor de la derecha");
console.log(19&&"Valor de la derecha");
console.log(true&&"Valor de la derecha");
console.log([]&&"Valor de la derecha");
console.log({}&&"Valor de la derecha");
console.log(-2&&"Valor de la derecha");
console.log(false&&"Valor de la derecha");
console.log(null&&"Valor de la derecha");
console.log(undefined&&"Valor de la derecha");
console.log(0&&"Valor de la derecha");
console.log(""&&"Valor de la derecha");


console.clear();
//Algunos métodos del objecto windo
/*console.log(window);
let promt = prompt("Prueba de string"), 
confirma = confirm("Acepta"),alerta = alert("Alertamos");

console.log(promt);
console.log(confirma);
console.log(alerta);*/

console.clear();


//Expresiones Regulares:

let lorem = "Lorem ipsum dolor sit amet consecteturlorem adipiscing elit mus, ut pharetra aliquet laoreet mi dignissim aenean, tristique vel viverra porttitor dictumst montes pellentesque. Mattis nibh phasellus laoreet primis tempus placerat ante cum lacinia nisi, per justo faucibus vehicula velit quam porta libero pulvinar est, torquent vestibulum class in sapien volutpat accumsan dignissim aliquam. Dignissim pulvinar nam arcu massa pellentesque conubia iaculis at integer porttitor diam, molestie nulla congue tellus facilisi morbi ante nec turpis habitant suspendisse, venenatis quis sodales pretium elementum augue habitasse semper vehicula enim.";

let lorem2 = " ipsum dolor23 sit amet consectetur adipiscing elit mus, ut pharetra aliquet laoreet mi dignissim aenean, tristique vel viverra porttitor dictumst montes pellentesque. Mattis nibh phasellus laoreet primis tempus placerat ante cum lacinia nisi, per justo faucibus vehicula velit quam porta libero pulvinar est, torquent vestibulum class in sapien volutpat accumsan dignissim aliquam. Dignissim pulvinar nam arcu massa pellentesque conubia iaculis at integer porttitor diam, molestie nulla congue tellus facilisi morbi ante nec turpis habitant suspendisse, venenatis quis sodales pretium elementum augue habitasse semper vehicula enim.";
let expReg = new RegExp("lorem");

console.log(expReg.test(lorem2));
console.log(expReg.exec(lorem2));

//La primera varibale que tiene la expresion regular busca dentro de los string 
//la palabra lorem pero sin mayuscula pero esta vez se coloca una bandera para que busque igual con Mayuscula:

let expReg2 = new RegExp("lorem","i");

//Métodos:

console.log(expReg2.test(lorem));
console.log(expReg2.exec(lorem));


//Manera literal:

let expReg3= /lorem/i;

console.log(expReg3.test(lorem));
console.log(expReg3.exec(lorem));

let expReg4 = /\d/ig;
console.log(expReg4.test(lorem));
console.log(expReg4.test(lorem2));
console.log(expReg4.exec(lorem));
console.log(expReg4.exec(lorem2));

let expReg5 = /lorem{2}/ig;
console.log(expReg5.test(lorem));
console.log(expReg5.exec(lorem));


console.clear();

//Función Anónima Autoejecutable

(function (){
	console.log("Primera funcion IIFE");
})();

(function (d,w,c){
	console.log("segunda funcion IIFE");
	console.log(d);
	console.log(w);
	c.log("Esto es un console.log");
})(document,window,console);


//Formas de ejecutar una función autoejecutable:

(function (){
	console.log("Forma Clásica");
})();

//La Crockford (JavaScript The Good Parts)


((function (){
	console.log("Forma Crokoford")
})());

//Forma Unaria:

+function (){
	console.log("Forma Unaria");
}();

// Forma Facebook

!function (){
	console.log("Version Facebook");
}();

console.clear()


