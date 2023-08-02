import React, {Fragment} from 'react';

const Jsx = () => {
	//const saludo = 'Hola JSX';
	const tempe = 21;
	return(
		
		<Fragment>
				<h2> ¿Frio o calor?</h2>
				<h4>
					{
						tempe > 20 ? 'Calor' : 'Frío'
					}
			</h4>
		</Fragment>
	);
}

export default Jsx;