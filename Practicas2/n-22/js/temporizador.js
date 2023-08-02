
const validarFechas = (horas = undefined,minutos = undefined,segundos = undefined) =>{

    
    if(segundos === undefined) return console.warn(`Esta vacio`);

    if(horas === undefined) return console.warn(`Esta vacio`);

    if(minutos === undefined) return console.warn(`Esta vacio`);

    if(isNaN(horas)) return console.error(`Horas: '${horas}' NO es un Número.`);

    if(isNaN(minutos)) return console.error(`Minutos: '${minutos}' NO es un Número.`);

    

    if(isNaN(segundos)) return console.error(`Segundos: '${segundos}' NO es un Número.`);

    



    if(horas <= -1) return console.error(`Horas: '${horas}'\n NO esta dentro del rango aceptado`);

    if((minutos <= -1) || (minutos > 60)) return console.error(`Minutos:'${minutos}'\n NO esta dentro del rango aceptado`);

    if((segundos <= -1) || (segundos > 60)) return console.error(`Segundos: '${segundos}'\n NO esta dentro del rango aceptado`);

    return true
}






const temporizador = (btnTem,reloj,btnStop,btnSeguir) =>{
    const d = document;

    let date,horas1,minutos1,segundos;

    const evaluacion = () =>{
        if(horas1 === 0 && minutos1 === 0 && segundos === 0){
            console.log("Entro en if");
            
                clearInterval(date);
                document.querySelector(btnTem).disabled = false;
                
           
        }
    }

    const time = () => {

            if(horas1 > 0 && minutos1 === 0) {                            
                if(horas1 >= 1) {
                    minutos1 = 60;
                }
                horas1--;
            }

            if(minutos1 > 0 && segundos === 0) {
                if(minutos1 => 1){
                    segundos = 60;
                }
                minutos1--;
            }

            if(segundos > 0) {
                segundos--;
            }
    
            d.querySelector(reloj).innerHTML = `<span>${horas1} : ${minutos1} : ${segundos}</span>`;
        
    }

    /*const prueba = () => (horas1 === 0&& minutos1 > 0 && segundos > 0) ? detener = 1000 * segundos * minutos1: (horas1 === 0 && minutos1 === 0 && segundos > 0) ? detener = 1000 * segundos : (horas1 > 0 && minutos1);
    

    if(Math.sign(horas) === 0) {
        
    }*/
    
    /* Validaciones de numeros de fecha hasta cierto rango */ 
    
    d.addEventListener("click",(e) =>{

        if(e.target.matches(btnTem)){
            horas1 = parseInt(prompt("Horas",0)),
            minutos1 = parseInt(prompt("Minutos",0)),
            segundos = parseInt(prompt("Segundos",0));

            d.querySelector(btnStop).disabled = false;
            d.querySelector(btnTem).disabled = true;
            d.querySelector(btnSeguir).disabled = true;


            if(validarFechas(horas1,minutos1,segundos)) date = setInterval(() => {
                time() 
                evaluacion()                
            },1000);
            
            
            
        }

        if(e.target.matches(btnSeguir)) {
            date = setInterval(() => {
                time()
                console.info("Ejecucion");
                evaluacion();
            },1000);

            d.querySelector(btnStop).disabled = false;
            d.querySelector(btnTem).disabled = true;
            d.querySelector(btnSeguir).disabled = true;

        }

        if(e.target.matches(btnStop)){
            clearInterval(date);
            d.querySelector(btnSeguir).disabled = false;
            d.querySelector(btnStop).disabled = true;
            d.querySelector(btnTem).disabled = false;
        }
    })


    
    

    
}

export default temporizador;