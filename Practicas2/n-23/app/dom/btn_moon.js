export default function moon(btn){
    const d = document;
    d.addEventListener("scroll", (e) =>{
        const scrollWindow = d.documentElement.scrollHeight - window.innerHeight;
        const scrollY = window.scrollY;
        //console.log(scrollWindow)
        //console.log(typeof scrollY)
        //console.log(Math.round(scrollY))



        if(Math.round(scrollY) > 870){
         d.querySelector(btn).classList.add("is-active"); 
        }

        if(Math.round(scrollY) < 870){
            d.querySelector(btn).classList.remove("is-active"); 
        }
    })

    d.addEventListener("click",(e) =>{
        if(e.target.matches(btn)||e.target.matches(`${btn} *`)){
            window.scrollTo(pageXOffset, 0);   
        }
    })
}