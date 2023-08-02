class IVA21 extends cuerpoIvaEspaña{
	constructor({id,nombre,ubicacion,monto,tipoDeServicioOVenta,serviciosOVentas}){

		super(id,nombre,ubicacion,monto,tipoDeServicioOVenta);
		

		this.ubicacion = ubicacion;
		this.nombre = nombre;
		this.monto = monto;
		this.tipoDeServicioOVenta = tipoDeServicioOVenta;
		this.serviciosOVentas = serviciosOVentas;
		this.validarID(id);
		this.validarNombre(nombre);
		this.validarMonto(monto);
		this.validacionUbicacion(ubicacion);
		this.validarSiEsServicioOVenta(tipoDeServicioOVenta);
		this.validarServicioOVenta(serviciosOVentas,tipoDeServicioOVenta);

	}
	static get ventasNombres(){
		return ["Vestimenta","Coches","Motocicletas","Higiene","Cosméticos","Electrodomésticos",];
	}

	static get servicioNombres(){
		return ["Luz","Gas","Combustible","Internet"]
	}

	static ventasAceptadas(){
		return console.info(`Los nombres aceptados y tipos de ventas son: ${IVA21.ventasNombres.join(", ")}.`);
	}

	static serviciosAceptados(){
		return console.info(`Los nombres aceptados y tipos de servicios son: ${IVA21.servicioNombres.join(", ")}.`);
	}

	
	validarServicioOVenta(serviciosOVentas,tipoDeServicioOVenta){

		if(/Venta/i.test(tipoDeServicioOVenta)){
			if(this.validarString("Tipo Venta",serviciosOVentas)){
				if(!(IVA21.ventasNombres.includes(serviciosOVentas))){
					console.error(`${serviciosOVentas} NO estan dentro de las ventas aceptados`);
					IVA21.ventasAceptadas();
				}
			}
		}else if(/Servicio/i.test(tipoDeServicioOVenta)){
			if(this.validarString("Tipo Servicio",serviciosOVentas)){
				if(!(IVA21.servicioNombres.includes(serviciosOVentas))){
					console.error(`${serviciosOVentas} NO estan dentro de los tipo de servicios aceptados`);
					IVA21.serviciosAceptados();
				}
			}
		}	
	}

	fichaTecnica(){
		console.info(`Ficha Técnica:\nNombre:${this.nombre}\nUbicación: ${this.ubicacion}\nDe naturaleza: ${this.tipoDeServicioOVenta}\nConcretamente: ${this.serviciosOVentas}\nMonto:${this.monto}\nMonto con IVA 21%: ${this.monto + (this.monto * 21 / 100)}`);
	}
}