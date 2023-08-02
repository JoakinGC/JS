import React,{useState, Fragment} from 'react';


const Lista = () => {

	const [arrayNumero, setNumero] = useState([1,2,3,4,5]);

	const addElement = () =>{
		console.log("click")
	}



	return(
		<Fragment>
			<h2>Lista</h2>
			<button onClick={addElement}>Agregar</button>
			{

				arrayNumero.map((item, index) => {	
					return <p key={index}>{item} - {index}</p>
				})
			}
		</Fragment>
		);
}


export default Lista;
