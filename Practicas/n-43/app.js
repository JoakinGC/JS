let porce = () =>{
	let obj,result;
	obj = document.datos.entrada.value;
	result = (obj / 100) * 10;
	document.writeln(`El 10 porciento de ${obj} es ${result}`);
}