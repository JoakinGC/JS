
const hamburguer = (btnInicio,btnFin,menuLinks) =>{
	const d = document;
	d.addEventListener("click",(e) =>{
		
		if(e.target.matches(btnInicio)||e.target.matches(`${btnInicio} *`)){
			d.querySelector(btnInicio).classList.toggle("is-active");
			d.querySelector(btnFin).classList.toggle("is-active");
		}
		if(e.target.matches(menuLinks)){
			d.querySelector(btnFin).classList.remove("is-active");
			d.querySelector(btnInicio).classList.remove("is-active");
		}
	})
}

export default hamburguer;