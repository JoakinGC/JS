class cuerpoIvaEspaña{
	constructor({id,ubicacion,nombre,monto,tipoDeServicioOVenta}){
		this.id = id;
		this.ubicacion = ubicacion;
		this.nombre = nombre;
		this.monto = monto;
		this.tipoDeServicioOVenta = tipoDeServicioOVenta;
	}

	static anuncioMoneda(){
		console.info(`La moneda que se usa para el monto demas cosas es "€" o el euro`);
	}
	static posiblesUbicaciones(){
		console.info(`Solo se aceptan tres ubicaciones que son:España, Islas Canarias, Extranjero`);
	}

	validarArray(propiedad,valor){

		if(!valor) return console.warn(`${propiedad} NO esta definido`);

		if(!(valor instanceof Array)) return console.error(`"${propiedad}" NO es un ARRAY.`);

		if(valor.length === 0) return console.error(`"${propiedad}" NO tiene ningun elemento`);


		for(let ele of valor){
			if(typeof ele !== "string") return console.error(`${ele} NO es un string`);
		}

		return true;
	}

	validarNumero(propiedad,valor){
		if(!valor) return console.warn(`${propiedad} NO esta definido`);

		if(typeof valor !== "number") return console.error(`El  "${propiedad} NO es un número.`);

		if(Math.sign(valor)===-1) return console.error(`${propiedad} tiene que ser positivo`);

		return true;
	}

	validarString(propiedad,valor=undefined){
		

		if(valor===undefined) return console.warn(`"${propiedad}" NO esta definida`)

		
		if(typeof valor !== "string")return console.error(`${propiedad} NO es un string`);

		if(valor.length===0) return console.error(`${propiedad} "${valor.length}" NO tiene ningun caracter.`);

		return true;
	}

	validarEspacios(propiedad,valor){
		if(!(/\s/g.test(valor))) return console.error(`${propiedad} "${valor}" debe estar seperados con espacio y tener dos palabras claves al menos.`);

		return true;
	}

	validarCaracteres(propiedad,valor,longitud){
		if(valor.length>longitud) return console.error(`${propiedad} "${valor}" excede el número de caracteres permitidos ${longitud}`);

		return true;
	}

	validarID(id){


		if(this.validarString("ID",id)){
			if(!(/^([1-7]{7})+([a-z]{2})$/.test(id))) return console.error("ID no valido");
		}
	}

	validarNombre(nombre){
		if(this.validarString("Nombre",nombre)){
			if(this.validarCaracteres("Nombre", nombre,50)){
				this.validarEspacios("Nombre",nombre);
			}
		}
	}

	validarMonto(monto){
		cuerpoIvaEspaña.anuncioMoneda();
        if(this.validarNumero("Monto",monto)){
        		if(!(/^[0-9]+([.]{0,1})+([0-9]){0,2}$/.test(monto))) return console.error(`El Monto NO puede tener más de dos valores despues de la coma`);
        }
    }

    validacionUbicacion(ubicacion){
    	if(this.validarString("Ubicación",ubicacion)){
    		if(!(/^(España)$/i.test(ubicacion))) {
    		 console.error(`"${ubicacion}" NO esta disponible.`);
    		 cuerpoIvaEspaña.posiblesUbicaciones();
    		// Más adelante usare |Islas Canarias|Extranjero;
    		}
    	}
    }

    validarSiEsServicioOVenta(tipoDeServicioOVenta){
		

		this.validarString("Tipo de servicio o venta",tipoDeServicioOVenta);

			if(!(/^(Servicio|Venta)$/i.test(tipoDeServicioOVenta)))return console.error(`Solo aceptamos dos palabras claves.	`);
			
		

		return true;
	}
}