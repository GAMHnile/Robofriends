import React from 'react';
import Card from './Card.js';



const Cardlist= ({robot})=>{
	const robotArray = robot.map((use, i)=>{
		return <Card name={robot[i].name} key={robot[i].id} id={robot[i].id} email={robot[i].email} />}
	);

	// if (true){
	// 	throw new Error('Noooooooooo')
	// }

	return(


		<div>
			{robotArray}
		</div>

		);
}


export default Cardlist;