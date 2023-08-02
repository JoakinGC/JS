export default function hamburguer(btn,panel,menu){
const d = document;

    d.addEventListener("click",(e) =>{
        if(e.target.matches(btn)|| e.target.matches(`${btn} *`)){
            d.querySelector(btn).classList.toggle("is-active");
            d.querySelector(panel).classList.toggle("is-active");
        }

        if(e.target.matches(`${menu} *`)){
            d.querySelector(btn).classList.remove("is-active");
            d.querySelector(panel).classList.remove("is-active");
        }
    })

};