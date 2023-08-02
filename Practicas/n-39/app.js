let suma = (a,b) => {
	a = window.prompt("Primer Nùmero:","0");
	a = parseInt(a);
	b = window.prompt("Segundo Número:","0");
	b = parseInt(b);
	let obj,result = a + b;
	alert(`La suma de dos nùmeros es: ${result}`);

	document.getElementById("Contenedor").innerHTML = `La suma de dos nùmeros es: ${result}`;
	obj=document.getElementById("Contenedor");
	obj.style.fontSize	= "80px";
	obj.style.color =  "red";
	obj.style.position = "relative";
	obj.style.left = "150px";




}
