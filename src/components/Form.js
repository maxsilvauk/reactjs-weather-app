import React from "react";


export default class Form extends React.Component {
	render() {
		return (
			<form onSubmit={this.props.getWeather}>
				<input type="text" name="city" defaultValue="Bristol" placeholder="City..."/>
				<input type="text" name="country" defaultValue="UK" placeholder="Country..."/>
				<button>Get Weather</button>
			</form>
		);
	}
};