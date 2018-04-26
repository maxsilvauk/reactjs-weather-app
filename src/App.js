import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

console.log('max');

export default class App extends React.Component {
  render() {
    return(
      <div>
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  }
};