import React, { Component } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: Math.floor(Math.random() * 100) + 1,
    };
    this.plus1Click = this.plus1Click.bind(this);
    this.minus1Click = this.minus1Click.bind(this);
    this.multBy2Click = this.multBy2Click.bind(this);
    this.divBy2Click = this.divBy2Click.bind(this);
  }

  plus1Click() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  }

  minus1Click() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  }

  multBy2Click() {
    this.setState((prevState) => ({
      count: prevState.count * 2,
    }));
  }

  divBy2Click() {
    this.setState((prevState) => ({
      count: prevState.count / 2,
    }));
  }

  render() {
    return (
      <div className="App">
        <h1>Get to 100!</h1>
        <h2>{this.state.count}</h2>
        <div className="actions">
          <button onClick={this.plus1Click}>+1</button>
          <button onClick={this.minus1Click}>-1</button>
          <button onClick={this.multBy2Click}>×2</button>
          <button onClick={this.divBy2Click}>÷2</button>
        </div>
      </div>
    );
  }
}

export default App;
