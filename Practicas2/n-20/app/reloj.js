


let date;
const d = document;

const hora = () =>{

	let date1 = new Date();
		
	document.querySelector(".r").innerHTML = `<p>${date1.getHours().toString()} : ${date1.getMinutes().toString()} : ${date1.getSeconds().toString()}</p>`;
}

const reloj = function(btnRelIni=undefined,btnRelFin=undefined){
	
	d.addEventListener("click",(e) =>{
		
		if(e.target.matches(btnRelIni)){
		
			date = setInterval(() => hora(),1000);

			d.querySelector(btnRelIni).setAttribute("disabled","disable");

			if(d.querySelector(btnRelFin).hasAttribute("disabled")){

				d.querySelector(btnRelFin).removeAttribute("disabled");
			}
		}

		if(e.target.matches(btnRelFin)){

			setTimeout(() =>{
				clearInterval(date);
				d.querySelector(".r").innerHTML = ` `;
			},1000);

			d.querySelector(btnRelIni).removeAttribute("disabled");
			d.querySelector(btnRelFin).setAttribute("disabled","disable");
		}
	})
		
}



export default reloj;