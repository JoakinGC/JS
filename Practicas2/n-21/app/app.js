import hamburguer from "./dom/hamburguer.js";
import juego from "./juego_boton.js";
const d = document;




d.addEventListener("DOMContentLoaded",(e) =>{
	hamburguer(".panel-btn",".panel",".menu a");
	juego(".juego-fondo",".bola");
})

