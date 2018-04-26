import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = '1dd90f227a599cba589112fa4fb9d47b';

export default class App extends React.Component {

  state = {
    temperature: undefined;
    city: undefined;
    country: undefined;
    humidity: undefined;
    description: undefined;
    error: undefined;
  };

  getWeather = (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;

    this.getData(api_url);
  };
  
  getData = async (api_url) => {
    const response = await(await(fetch(api_url))).json()
    console.log('response', response);
  };

  render() {
    return(
      <div>
        <Titles />
        <Form getWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
};