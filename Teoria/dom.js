/*console.log(window);
console.log(document);

let texto = "Hola Soy Joaquin y estoy aprendiendo JavaScript";
const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));


hablar(texto)*/

//console.log("DOM");
//Document Object Model:

//Para acceder y obtener las diferentes partes del documento.

/*console.log("***********Elementos de Documento*************");
console.log(window.document);
//No es necesario el window
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.charset);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);

setTimeout(()=>{
    console.log(document.getSelection().toString());
},3000);

document.write("<h2>Hola mundo desde el DOM</h2>");*/


//Nodos:

//Las propiedades que ya no se usan:

/*console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));

//Los que se usan:

console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a")); //Solo busca uno

console.log(document.querySelectorAll("a").length);

document.querySelectorAll("a").forEach((el)=> console.log(el));

console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));*/


//Acceder a los atributos:

/*console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

// Cambiar valores de los atributos:

document.documentElement.lang = "en";
console.log(document.documentElement.lang);

document.documentElement.setAttribute("lang","es-MX");
console.log(document.documentElement.lang);

//Guardamos nuestro DOM en una variable usamos const y el simbolo "$" para diferenciar cuales variables son relacionadas con nuestro HTML y cual de nuestro código de programación.

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target","_blank");
$linkDOM.setAttribute("rel","noopener");
$linkDOM.setAttribute("href","https://google.com/");


//Trabajar con  Data-Attribute:

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description","Modelo de Objecto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Descripción de la etiqueta";
console.log($linkDOM.dataset.description);

console.log($linkDOM.dataset.description);
console.log($linkDOM.hasAttribute("data-id"));
console.log($linkDOM.removeAttribute("data-id"));
console.log($linkDOM.hasAttribute("data-id"));*/


//Estilos y variables CSS:

/*const $linkDOM = document.querySelector(".link-dom");

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

//Cambiar valores de propiedades y agregar nuevas propiedades:

$linkDOM.style.setProperty("text-decoration","none");
$linkDOM.style.setProperty("display","block");
$linkDOM.style.width = "50%";
$linkDOM.style.lineCenter = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));


//Variables CSS - Custom Propoties CSS:


const $html = document.documentElement,
$body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");


console.log(varYellowColor, varDarkColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color","yellow");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("backgroundColor",varDarkColor);*/


/*const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);
console.log($card.classList);

console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.classList);
$card.classList.remove("rotate-45");

console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));

$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45","rotate-135");

$card.classList.add("opacity-80","sepia");*/

//Text HTML y texto:

/*const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
    El Modelo de Objectos del Documento (<br><i>DOM - Document Object Model</i></br>) es una API para documentos HTML y XML.
    </p>
     <p>
        Este proveé una presentación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS
    </p>
    <p>
        <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores</mark>
    </p>`;

    $whatIsDOM.innerText = text;
    $whatIsDOM.textContent = text;
    $whatIsDOM.innerHTML = text;
    $whatIsDOM.outerHTML = text;*/


/*const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[3]);

console.log($cards.parentElement);
console.log($cards.parentNode);

console.log($cards.firstElement);
console.log($cards.firstElementChild);

console.log($cards.lastElement);
console.log($cards.lastElementChild);

console.log($cards.previousSibling);
console.log($cards.previousElementSibling);

console.log($cards.nextSibling);
console.log($cards.nextElementSibling);

console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));*/


// Creacion de Elementos Dinamicos:


//Inicialiazacion de variables:

/*const $figure = document.createElement("figure"),
$img = document.createElement("img"),
$figcaption = document.createElement("figcaption"),
$figcaptionText = document.createTextNode("Animals"),
$cards = document.querySelector(".cards");




//Agregar al Arbol de HTML:


$img.setAttribute("src","https://placeimg.com/200/200/animals");
$img.setAttribute("alt","animals");
$figure.classList.add("card");

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

//Otra forma de inicializar y agregar arbol de HTML:

const $figure2 = document.createElement("figure");



$figure2.innerHTML = `
    <img src="https://placeimg.com/200/200/tech" alt="Tech">
    <figcaption>Tech</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

//Cracion de lista:

const estaciones = ["Primavera","Varano","Otoño","Invierno"],
$ul = document.createElement("ul");
$estaciones = document.createTextNode("Estaciones del Año");
$h3 = document.createElement("h3");


document.body.appendChild($h3);
$h3.appendChild($estaciones);
document.body.appendChild($ul);

estaciones.forEach((el) =>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
})

const continentes = ["África","América","Asia","Europa","Oceanía"],
$ul2 = document.createElement("ul");

document.write(`<h3>Continentes del Mundo.</h3>`);
document.body.appendChild($ul2);

$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));


//Usando Fragmentos:

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
],
$ul3 = document.createElement("ul"),
$frament = document.createDocumentFragment();

meses.forEach((el) =>{
    const $li = document.createElement("li");
    $li.textContent = el;
    $frament.appendChild($li);
})


document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($frament);
document.body.appendChild($ul3);*/


//Templates HTML:

/*const $cards = document.querySelector(".cards"),
$template = document.getElementById("template-card").content,
$fragment = document.createDocumentFragment(),
cardContents = [
{
    title:"Tecnología",
    img:"https://placeimg.com/200/200/tech"
},
{
    title:"Animales",
    img:"https://placeimg.com/200/200/animals"
},
{
    title:"Arquictetura",
    img:"https://placeimg.com/200/200/arch"
},
{
    title:"Gente",
    img:"https://placeimg.com/200/200/people"
},
{
    title:"Naturaleza",
    img:"https://placeimg.com/200/200/nature"
}];

cardContents.forEach((el) =>{
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template,true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);*/

//Modificar elementos antes:

/*const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure"),
$cloneCards = $cards.cloneNode(true);

$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcation style="style="display: block;"">Any</figcation>
`;

$newCard.classList.add("card");


//$cards.replaceChild($newCard,$cards.children[2]); // Para remplazar un elemento ya creado


// $cards.removeChild($cards.lastElementChild); // Elimina un elemento hijo que le digamos.

//$cards.insertBefore($newCard, $cards.firstElementChild); // Para colocar adelante de un elemento ya existente.

document.body.appendChild($cloneCards);*/



/* 

Modificar elementos Old Style:


.insertAdjacent...

    .insertAdjacentElement(position,el)

    .insertAdjacentHTML(position,html)

    .insertAdjacentText(position,text)



posiciones:

    beforebegin (hermano anterior)

    afterbegin (primer hijo)

    beforeend (ultimo hijo)

    afterend  (hermano siguiente)

*/

/*const $cards = document.querySelector(".cards"),
$newCard = document.createElement("figure");


$newCard.innerHTML = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcation>Any</figcation>
`;

$newCard.classList.add("card");


//$cards.insertAdjacentElement("beforebegin",$newCard); //Hermano anterior o antes de la etiqueta padre que le coloquemos.

//$cards.insertAdjacentElement("afterbegin",$newCard); //Primer elemento hijo

//$cards.insertAdjacentElement("beforeend",$newCard); //Ultimo hijo o ultimo elemento.

//$cards.insertAdjacentElement("afterend",$newCard); // Despues de la etiqueta que le digamos

const $newCard2 = document.createElement("figure");

$newCard2.classList.add("card");

let $contenCard = `
    <img src="https://placeimg.com/200/200/any" alt="Any">
    <figcation></figcation>
`;

$newCard2.insertAdjacentHTML("beforeend",$contenCard);
$newCard2.querySelector("figcation").insertAdjacentHTML("afterbegin","any"); // Agregamos el texto faltante.

//$cards.insertAdjacentElement("afterbegin",$newCard2);


//Pero este es el nueva forma:

//$cards.prepend($newCard2); // Primer hijo de cards
//$cards.append($newCard2); // Ultimo hijo de cards
//$cards.before($newCard2); // Antes de cards
//$cards.after($newCard2); // Despues de cards.*/


//Manejadores de Eventos:

/*function holaMundo(){
    alert("Hola mundo");
    console.log(event)
}

//Evento Semantico

const $eventoSemantico = document.getElementById("evento-semantico");


//console.log(document.getElementById("evento-semantico"));

$eventoSemantico.onclick = holaMundo(); //Mal

$eventoSemantico.onclick = holaMundo; //Bien

$eventoSemantico.onclick = function(e){
    alert("Hola Mundo");
    console.log(e);
    console.log(event);

}


//Evento Multiple:

const $eventoManejadorMultiple = document.getElementById("evento-multiple");

$eventoManejadorMultiple.addEventListener("click",holaMundo);
$eventoManejadorMultiple.addEventListener("click",(e) =>{
    alert("Hola mundo manejador de Eventos Múltiples");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(event);
});


//Evento con Parámetros y Removerlos

function saludar(nombre = "desconocid@"){
    alert(`Hola ${nombre}`);
    console.log(event);
}


$eventoManejadorMultiple.addEventListener("click",saludar);



$eventoManejadorMultiple.addEventListener("click",() => saludar());
$eventoManejadorMultiple.addEventListener("click",() => saludar("Joa"));*/

/*Otra funcion que sea menejadora de eventos no va recibir otro parámetro que no sea "event"*/

//Remover Eventos:

/*const $removerEvento = document.getElementById("evento-remover");
//console.log($removerEvento)

const removerDobleClick = (e) =>{
    alert(`Removiendo el evento de tipo ${e.type}`);
    console.log(e);
    $removerEvento.removeEventListener("dblclick",removerDobleClick);
    $removerEvento.disabled = true;
};

$removerEvento.addEventListener("dblclick",removerDobleClick);*/





//Flujo de Eventos:

/*const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
$divUno = document.querySelector(".uno");

function flujoDeEventos (e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
}

console.log($divsEventos);

//$divUno.addEventListener("click",flujoDeEventos);

$divsEventos.forEach((divs) =>{
    //divs.addEventListener("click",flujoDeEventos);

    //Tercer Paramtro

    //divs.addEventListener("click",flujoDeEventos,false);

    //De fuera hacia dentro:

    //divs.addEventListener("click",flujoDeEventos,true);
    divs.addEventListener("click",flujoDeEventos,{
        capture: false,
        once: true
    });
})*/

//stopPropagation:



/*const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
$linkJon = document.querySelector(".link-jon");

function flujoDeEventos (e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);

    e.stopPropagation();
}

$divsEventos.forEach((divs) =>{
    divs.addEventListener("click",flujoDeEventos);
})

console.log($linkJon);

$linkJon.addEventListener("click", (e) =>{
    alert("Hola soy tú amigo y docente digital... Jonathan Mircha");

    //e.preventDefault();
    //e.stopPropagation();
})*/

/*const $divsEventos = document.querySelectorAll(".eventos-flujo"), $linkJon = document.querySelector(".link-jon");;

function flujoDeEventos (e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);

    e.stopPropagation();
}


document.addEventListener("click",(e) =>{
    console.log("Click en", e.target);



    if(e.target.matches(".eventos-flujo div")){
        flujoDeEventos(e);
    }


    if(e.target.matches(".eventos-flujo a")){
        alert("Hola soy tú amigo y docente digital... Jonathan Mircha");
        a.preventDefault();
    }
})*/


/*$divsEventos.forEach((divs) =>{
    divs.addEventListener("click",flujoDeEventos);
})

$linkJon.addEventListener("click", (e) =>{
    alert("Hola soy tú amigo y docente digital... Jonathan Mircha");

    e.preventDefault();
    e.stopPropagation();
})*/


//BOM: Propiedades y Eventos:


/*window.addEventListener("resize", (e) =>{
    console.clear()
    console.log("********Evento Resize*********");

    console.log(window.innerWidth);
    console.log(window.innerHeight);
    console.log(window.outerWidth);
    console.log(window.outerHeight);

    console.log(e);
})




     window.addEventListener("scroll",(e) =>{
        console.clear();
        console.log("********Evento Scroll*********");
        console.log(window.scrollX);
        console.log(window.scrollY);
        console.log(e);
     })


window.addEventListener("load",(e) =>{
    
    console.log("********Evento Load*********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})


window.addEventListener("DOMContentLoaded",(e) =>{
    console.log("********Evento DOMContentLoad*********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
})   */


//BOM Métodos:

//window.alert();
//window.confirm();
//window.prompt();
const $btnAbrir = document.getElementById("abrir-ventana"),
$btnCerrar = document.getElementById("cerrar-ventana"),
$btnImprimir = document.getElementById("imprimir-ventana");
let ventana;

/*document.addEventListener("click", (e) =>{

    if(e.target.matches("#abrir-ventana")){
        window.open("https://jonmircha.com");
        console.log("Open");

    }
    if(e.target.matches("#cerrar-ventana")){
        window.open("https://jonmircha.com");
    }
    if(e.target.matches("#imprimir-ventana")){
        window.open("https://jonmircha.com");
    }
})*/

$btnAbrir.addEventListener("click",(e) =>{
    //window.open("https://jonmircha.com");
    ventana = open("https://jonmircha.com");
})

$btnCerrar.addEventListener("click",(e) =>{
    //window.close();
    //close();
    ventana.close();
})

$btnImprimir.addEventListener("click",(e) =>{
    //window.print()    
    print();
})

//Objecto URL (Location)

/*console.log("************Objeto URL (location)************");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);

//location.roload*/

/*console.log("*********************Objecto Historial (Historial)");

console.log(history);
console.log(history.length);
//console.log(history.back(2));
//console.log(history.forward(2));
//console.log(history.go());*/

/*console.log("*********************Objecto Navagador (navigator)");
console.log(navigator);
console.log(navigator.connection);
console.log(navigator.geolocation);
console.log(navigator.mediaDevices);
console.log(navigator.mimeTypes);
console.log(navigator.onLine);
console.log(navigator.serviceWorker);
console.log(navigator.storage);
console.log(navigator.usb);
console.log(navigator.userAgent);
*/