import  {hamburguer} from "./dom/hamburguer.js";
import temporizador from "./temporizador.js";

const d = document;
d.querySelector(".detener-tem").disabled = true;
d.querySelector(".seguir-tem").disabled = true;
d.addEventListener("DOMContentLoaded",(e) =>{
    hamburguer(".panel-btn",".panel",".menu","#audio-tem","#win");
    temporizador(".temporizador",".reloj",".detener-tem",".seguir-tem");
});