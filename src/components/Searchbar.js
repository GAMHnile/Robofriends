import React from 'react';


const Searchbar = ({onLiveSearch})=>{
	return(
		<div className=''>
			<input type='search' className='tc pa3 ba b--green bg-lightest-blue' placeholder='Search Robots' onChange={onLiveSearch} />
		</div>

		

		);
}

export default Searchbar;