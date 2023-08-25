const d = document,w = window;

export default function ventana(url,height,width,abr,cer){
    let inpHeight;
    let inpWidth;
    let inpUrl,
    btnAbr =  d.querySelector(abr),
    btnCer =  d.querySelector(cer);


    d.addEventListener("click",(e) =>{
        if(e.target.matches(abr)){
            inpUrl = d.querySelector(url).value;
            inpHeight = d.querySelector(height).value;
            inpWidth = d.querySelector(width).value;

            
            if(Number(inpHeight)>0&&Number(inpWidth)>0){
                w.open(
                    inpUrl,
                    "Pagina",
                    `width=${inpWidth},height=${inpHeight},scrollbars=NO`
                );
            }else{
                w.open(
                    inpUrl,
                    "Pagina",
                    `width=50,height=50,scrollbars=NO`
                );
            }
        }else{
            w.close();
        }
    });
};