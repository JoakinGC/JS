import hamburguer from "./dom/hamburguer.js";
import darkMiniWeb from "./dom/dark_web.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e) =>{
    hamburguer(".panel-btn",".panel",".menu");
    darkMiniWeb(".moon-btn","estilos")
})