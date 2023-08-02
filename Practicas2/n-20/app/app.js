import menuHamburguesa from "./dom/menu_hamburguesa.js";
import reloj from "./reloj.js";
import {temporizador} from "./temporizador.js"

//Ver la API de audio eso me hubira ayudado.

const d = document;

d.addEventListener("click",(e)=>{
	menuHamburguesa(".panel-btn",".panel",".menu a");
	reloj(".reloj .inicio",".reloj .fin");
	temporizador(".alarma .inicio",".alarma .fin",".alarma .audio-alarma");

})