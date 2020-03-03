import React, { Component } from "react";
import ReactDOM from "react-dom";
import "index.scss";

export default class Hello extends Component {
  render() {
    return <h1>Hey there</h1>;
  }
}

ReactDOM.render(<Hello></Hello>, document.getElementById("root"));
