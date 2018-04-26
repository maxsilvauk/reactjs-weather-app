import React from "react";


export default class Titles extends React.Component {
	render() {
		return (
			<div>
				<h1>Weather Finder</h1>
				<p>Find out temperature conditions and more</p>
				<p>Examples:</p>
				<ul>
					<li>Bristol, UK</li>
					<li>Rome, IT</li>
					<li>London, UK</li>
					<li>Washington, US</li>
					<li>Full List <a href="http://openweathermap.org/help/city_list.txt">here</a></li>
				</ul>
			</div>
		);
	}
};