import conetado from "./network.js";

const d = document,
w = window,
n = navigator;



w.addEventListener("load",(e) =>{

    conetado("conexion",n.onLine);

    w.addEventListener("online",() =>{
        conetado("conexion",true);
    }); 

    w.addEventListener("offline",() =>{
        conetado("conexion",false);
    }); 

});
