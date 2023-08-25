const d = document;

export default function darkTheme (btn,metaDark){
    let luna = d.querySelector(btn),
    darkElements = d.querySelectorAll(`[${metaDark}]`);
    let moon  = "🌙",
    sun = "🌕";
    let estado = window.localStorage;

    luna.innerHTML = estado.getItem("estado");
    if(luna.textContent==="🌙"){
        darkElements.forEach(ele =>  ele.classList.add("dark-mode"));
        estado.setItem("estado",sun);
        luna.innerHTML = estado.getItem("estado");                     
    }else if(luna.textContent==="🌕"){
        darkElements.forEach(ele =>  ele.classList.remove("dark-mode"));
        estado.setItem("estado",moon);
        luna.innerHTML = estado.getItem("estado");                     
    }

    luna.addEventListener("click",(e) => {
        
        if(luna.textContent==="🌙"){
            darkElements.forEach(ele =>  ele.classList.add("dark-mode"));
            estado.setItem("estado",sun);
            luna.innerHTML = estado.getItem("estado");                     
        }else if(luna.textContent==="🌕"){
            darkElements.forEach(ele =>  ele.classList.remove("dark-mode"));
            estado.setItem("estado",moon);
            luna.innerHTML = estado.getItem("estado");                     
        }
    });
};