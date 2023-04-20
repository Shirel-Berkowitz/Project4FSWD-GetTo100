import React, { Component, useContext, useState } from "react";
import "./App.css";
// import { GamersContext } from './GamersContext';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      count: Math.floor(Math.random() * 100),
      steps: 0,
      isDisabledBtn: false,
      //gamers: [],
    };

    this.plus1Click = this.plus1Click.bind(this);
    this.minus1Click = this.minus1Click.bind(this);
    this.multBy2Click = this.multBy2Click.bind(this);
    this.divBy2Click = this.divBy2Click.bind(this);
  }

  plus1Click() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      steps: prevState.steps + 1,
      isDisabledBtn: true,
    }));
  }

  minus1Click() {
    this.setState((prevState) => ({
      count: prevState.count - 1,
      steps: prevState.steps + 1,
      isDisabledBtn: true,
    }));
  }

  multBy2Click() {
    this.setState((prevState) => ({
      count: prevState.count * 2,
      steps: prevState.steps + 1,
      isDisabledBtn: true,
    }));
  }

  divBy2Click() {
    this.setState((prevState) => ({
      count: prevState.count / 2,
      steps: prevState.steps + 1,
      isDisabledBtn: true,
    }));
  }

  // addGamerButton() {
  //   this.setState((username, score = 0) => ({
  //     //gamers: this.state.gamers.push()
  //   }));
  // }

  //???
  // addGamer() {
  //   const [name, setName] = useState('');
  //   const [score, setScore] = useState('');

  //   const {dispatch}= useContext(GamersContext);

  //   const handleSubmit = (event) => {
  //     event.preventDefault();

  //     const newGamer = {
  //       name,
  //       score,
  //     };

  //     dispatch({
  //       type: 'ADD_GAMER',
  //       payload: newGamer,
  //     });

  //     setName('');
  //     setScore('');
  //   };

  // }

  render() {
    const { isDisabledBtn } = this.state;
    return (
      <div className="App">
        <h1>Get to 100!</h1>
        <h2>User: {this.state.username}</h2>
        <h4>{this.state.isDisabledBtn == true ? "Enabled!" : "Disabled"}</h4>
        <h2>{this.state.count}</h2>
        <h3>steps: {this.state.steps}</h3>
        <h4>{this.state.count == 100 ? "You won!" : ""}</h4>
        <div className="actionBtns">
          <button onClick={this.plus1Click} disabled={isDisabledBtn}>
            +1
          </button>
          <button onClick={this.minus1Click} disabled={isDisabledBtn}>
            -1
          </button>
          <button onClick={this.multBy2Click} disabled={isDisabledBtn}>
            ×2
          </button>
          <button onClick={this.divBy2Click} disabled={isDisabledBtn}>
            ÷2
          </button>
        </div>
      </div>
    );
  }
}

export default App;
