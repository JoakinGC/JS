const juego = (seccion,bola) =>{
    const d = document;
    let right = 50,left = 50,up = 50,down = 50;
    d.addEventListener("keydown",(e) =>{
    
    let $seccion = d.querySelector(seccion),
     $bola = d.querySelector(bola),
     contador = 0;

        if(e.key==="ArrowRight"){
            $seccion.classList.remove("flex");

            

            if(!($bola.classList.contains("is-active"))) $bola.classList.add("is-active");

//0%
    
            if(left > 0){
                left-=5;
                $bola.style.left = `${left.toString()}%`;
            }
            //$seccion.innerHTML = `<div class="bola" style="right:${right.toString()}px;"></div>`;
        }
        if(e.key==="ArrowUp"){
            e.preventDefault();
            $seccion.classList.remove("flex");

            
            if(!($bola.classList.contains("is-active")))  $bola.classList.add("is-active");

            //85%
            if(up < 85){
                up+=5;
                $bola.style.bottom  = `${up.toString()}%`;
            }
        }
        if(e.key==="ArrowDown"){
            e.preventDefault();

            $seccion.classList.remove("flex");

            console.log(!($bola.classList.contains("is-active")))
            if(!($bola.classList.contains("is-active"))) $bola.classList.add("is-active");
            

            //0%
            if(up > 0){
                up-=5;
                $bola.style.bottom  = `${up.toString()}%`;
            }
        }
        if(e.key==="ArrowLeft"){
            
            $seccion.classList.remove("flex");

                
                if(!($bola.classList.contains("is-active"))) $bola.classList.add("is-active");
            //90%
            if(left < 90){
                left+=5;
                $bola.style.left = `${left.toString()}%`;
            }
        }
    })
}

export default  juego;