import React,{useState, Fragment} from 'react';


const Contador = () =>{

	const [numero, setNumero] = useState(1);

	const aumentar = () => {
		console.log("Uno mas");
		setNumero(numero + 1);
	}
	return(

		
		<Fragment>
			<h3>Component {numero}</h3>
			<button onClick={aumentar}>Aumentar</button>
		</Fragment>
		);
}

export default Contador;