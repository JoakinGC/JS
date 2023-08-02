import hamburguer from "./dom/hamburguer.js";
import moon from "./dom/btn_moon.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e) =>{
    hamburguer(".panel-btn",".panel",".menu a");
    moon(".btn-scroll")
})