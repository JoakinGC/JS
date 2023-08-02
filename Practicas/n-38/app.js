function CambiaColor(nombreColor) {
	nombreColor = window.prompt("Color:","black");
	let obj = document.getElementById("informacion");
	obj.style.color = nombreColor;
}

alert("Prueba");