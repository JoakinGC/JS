const $article = document.querySelector(".despliegue"),
$header = document.querySelector("header"),
$butonHambu = document.querySelector(".hamburger"),
$main = document.querySelector("main"),
$section = document.querySelector(".panel");


document.body.classList.add("padding-margin-0");

//console.log($article2)

//$article.classList.add("position-relative");

/*$article.getAttribute("style");
$article.style.position = "relative";
$article.style.left = "90%";*/
$butonHambu.classList.add("dp-inline");
$butonHambu.classList.add("position-left");
//$article.classList.add("position-relative");
$header.classList.add("head");
$header.classList.add("bg-yellow")
$header.classList.add("text-center");
$main.classList.add("bg-white");
$article.classList.add("bg-white");




document.addEventListener("click",(e) =>{
	console.log(e.target)
	if(e.target.matches(".hamburger-box")||e.target.matches(".hamburger")||e.target.matches(".hamburger-inner")){
		
		$section.classList.add("bg-black");
		$section.classList.add("margin-20");
 		


		$section.innerHTML = `
		<aside>
			<nav class="text-center text-20 margin-20" >
					<a class="dp-block" href="#section-1">Seccion 1</a>
					<br>
					<a class="dp-block" href="#section-2">Secion 2</a>
					
				<br>
					<a class="dp-block" href="#section-3">Secion 3</a>
				<br>
					<a class="dp-block" href="#section-4">Secion 4</a>
				<br>
					<a href="#section-5">Secion 5</a>
			</nav>
			</aside>`;

			
	}

	if(e.target.matches("a")){
		
		$section.innerHTML = ` `;
	}
})







//document.addEventListener()

//console.log($butonHambu)