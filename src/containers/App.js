import React, {Component} from 'react';
import Cardlist from '../components/Cardlist.js';
// import {robots} from '../robots.js';
import Searchbar from '../components/Searchbar.js';
import './App.css';
import Scroll from '../components/Scroll.js';
import ErrorBoundary from '../components/Errorboundary.js'

class App extends Component {
	constructor(){
		super();
		this.state = {robots: [],
			searchfield:''}

	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(list => list.json())
		.then(users => this.setState({robots: users}));
	}


	onLiveSearch=(event)=>{
		this.setState({searchfield: event.target.value})
	}
	render(){
		const { robots, searchfield} = this.state;

		if (!robots.length){
			return <h1>Loading</h1>
		}
		else{
		const filterList = robots.filter(robot =>{
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return(
			<div className='tc'>
			<h1 className='f1'>Robofriends</h1>
			<Searchbar onLiveSearch={this.onLiveSearch}/>
				<Scroll>
					<ErrorBoundary>
						<Cardlist robot={filterList}/>
					</ErrorBoundary>
				</Scroll>
			</div>
			);}
	}
}


export default App;