const menuHamburguesa = (btn=undefined,panel=undefined,menu=undefined) => {
	const d = document;

	if(btn === undefined) return console.warn(`btn NO esta definido`);

	if(panel === undefined) return console.warn(`panel NO esta definido`);

	if(menu === undefined) return console.warn(`menu NO esta definido`);

	if(typeof btn !== "string") return console.error(`${btn} NO es un string`);

	if(typeof panel !== "string") return console.error(`${panel} NO es un string`);

	if(typeof menu !== "string") return console.error(`${menu} NO es un string`);


	d.addEventListener("click", (e) =>{
		if(e.target.matches(btn)||e.target.matches(`${btn} *`)){
			d.querySelector(panel).classList.toggle("is-active");
			d.querySelector(btn).classList.toggle("is-active");
		}

		if(e.target.matches(menu)){
			d.querySelector(panel).classList.remove("is-active");
			d.querySelector(btn).classList.remove("is-active");
		}
	})
}

export default menuHamburguesa;

