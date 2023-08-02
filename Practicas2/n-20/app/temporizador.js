const temporizador = (btnRelIni=undefined,btnRelFin=undefined,audio=undefined) => {
	

	const d = document;

	d.addEventListener("click",(e) =>{
		
		if(e.target.matches(btnRelIni)){
		
			d.querySelector(audio).setAttribute("src","sources/audio/alarma-efecto.mp3");

			d.querySelector(audio).setAttribute("autoplay","");
			d.querySelector(audio).setAttribute("loop","");


			d.querySelector(btnRelIni).setAttribute("disabled","disable");

			if(d.querySelector(btnRelFin).hasAttribute("disabled")){

				d.querySelector(btnRelFin).removeAttribute("disabled");
			}
		}

		if(e.target.matches(btnRelFin)){

			d.querySelector(audio).removeAttribute("src","sources/audio/alarma-efecto.mp3");
			d.querySelector(audio).removeAttribute("autoplay");
			d.querySelector(audio).removeAttribute("loop");
			d.querySelector(btnRelIni).removeAttribute("disabled");
			d.querySelector(btnRelFin).setAttribute("disabled","disable");
		}
	})	
}


export {temporizador};