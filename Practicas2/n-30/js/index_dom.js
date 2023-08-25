import accederCamara from "./camara.js";

const d = document;

d.addEventListener("DOMContentLoaded",(e) =>{
    accederCamara("webcam","canva","play","stop");
});