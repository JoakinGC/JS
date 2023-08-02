
const iva21 = [],
 iva10 = [],
 iva4 = [],
 iva0 = [];



const buscarSinMonto = (nombre=undefined,tipoDeServicioOVenta=undefined, serviciosOVentas=undefined) =>{

	if(nombre === undefined) return console.warn("Nombre NO esta definido");

	if(tipoDeServicioOVenta === undefined) return console.warn("La naturaleza del mismo NO esta definido");

	if(serviciosOVentas === undefined) return console.warn("Servicio o Venta o Profesion NO esta definido");

	if(typeof nombre !== "string") return console.error("Nombre NO es un string");

	if(typeof tipoDeServicioOVenta !== "string") return console.error("La naturaleza del mismo NO esta definido");

	if(typeof serviciosOVentas !== "string") return console.error("Servicio o Profesion o Venta no es un string");

	if(nombre.length === 0) return console.error("Nombre NO tiene ningun elemento");

	if(tipoDeServicioOVenta.length === 0) return console.error("La naturaleza del mismo NO tiene ningun elemento");

	if(serviciosOVentas.length === 0) return console.error("Servicio o Venta o Profesion NO tiene ningun elemento");


	return console.info({
		nombre,
		tipoDeServicioOVenta,
		serviciosOVentas,
		concidencias: iva21.filter(ele => ele===nombre||tipoDeServicioOVenta===ele||ele===serviciosOVentas )
	})
}

//buscar()
//buscar("Joa")
//buscar("Joa","naturaleza")
//buscar({},"naturaleza",2)
//buscar("Joa",{},3)
//buscar("Joa","naturaleza",2)
//buscar("","","")
//buscar("1","","")
//buscar("1","2","")
//buscar("1","2","3")


const agregarElementos = (tipoDeIva=undefined, id="",nombre = "",ubicacion = "",monto = "" ,tipoDeServicioOVenta = "",serviciosOVentas = "") =>{


	if(tipoDeIva === undefined) return console.warn("NO esta definido el tipo de IVA");

	if(typeof tipoDeIva !== "number") return console.error("Tiene que ser númerico el tipo de IVA");

	if(Math.sign(tipoDeIva) === -1) return console.error("Tiene que ser positivo");


	let producto21 = new IVA21({
		id,
		nombre,
		ubicacion,
		monto,
		tipoDeServicioOVenta,
		serviciosOVentas
	});

	//let productoO = new IVA0

	return (tipoDeIva===21) ? iva21.push(producto21):(tipoDeIva === 10) ? iva10.push(producto21) : (tipoDeIva === 4) ? iva4.push(producto21): (tipoDeIva === 0) ? iva0.push(producto21) : console.error(`"${tipoDeIva}" NO es aceptado`);
}

//agregarElementos();
//agregarElementos({});
//agregarElementos(-2);


agregarElementos(21,"1111111aa","Papel Higenico de Mercadona","España",10,"venta","Higiene");
agregarElementos(21,"1111111ab","Remera de Astrada","España",7,"venta","Vestimenta");
agregarElementos(21,"1111111ac","Casa de Marcos","España",97,"servicio","Luz");
agregarElementos(21,"1111111ad","Internet en Piso","España",10,"servicio","Gas");



//Faltaria hacer una forma de validar ID sin symbols

//const cambiarElemento = (propiedad=undefined, valor=undefined,id=undefined)=>

const verElementos = (arrAVer=undefined) => (arrAVer === undefined) ? console.warn(`NO esta definido`) : (typeof arrAVer!== "number") ? console.error(`${arrAVer} NO es un string`) : (arrAVer===21) ? iva21.forEach(ele => ele.fichaTecnica()) : console.error(`${arrAVer} NO esta disponible o NO es aceptado como categoria`);

//verElementos()
//verElementos("")
//verElementos(0)
//verElementos(21)


