import React, {Component} from 'react';


class ErrorBoundary extends Component{
	constructor(props){
		super(props);
		this.state = {errorFound: false}
	}

	componentDidCatch(error, info){
		this.setState({errorFound: true})
	}


	render(){
		if(this.state.errorFound){
			return <h1>Ooops Something went wrong</h1>
		}
		else{
			return this.props.children
		}

	}




}

export default ErrorBoundary