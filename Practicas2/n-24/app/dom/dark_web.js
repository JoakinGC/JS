export default function darkMiniWeb(btn,link){
    const d = document,
    $link = d.getElementById(link),
    $btnMoon = d.querySelector(btn);


    d.addEventListener("click",(e) =>{

        if(e.target.matches(btn)||e.target.matches(`${btn} *`)){
            

            if(!($btnMoon.classList.contains("is-active"))){
        

                $link.href = "styles/styles-2.css";
                $btnMoon.classList.add("is-active");

            }else if($btnMoon.classList.contains("is-active")){
                
                $link.href = "styles/styles-1.css";
                $btnMoon.classList.remove("is-active")

            }
        }

    })
}