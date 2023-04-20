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
      players: [
        { name: "Shirel", value: 0 },
        { name: "Ori", value: 0 },
      ],
      currentPlayerIndex: 0,
      gameOver: false,
    };
    this.handlePlayerAction = this.handlePlayerAction.bind(this);
  }

  handlePlayerAction = (value) => {
    this.setState((prevState) => {
      let newValue;
      // Perform player action
      if (value === "×2") {
        newValue = prevState.count * 2;
      } else if (value === "÷2") {
        newValue = prevState.count / 2;
      } else if (value === "+1") {
        newValue = prevState.count + 1;
      } else if (value === "-1") {
        newValue = prevState.count - 1;
      }
      return {
        count: newValue,
        steps: prevState.steps + 1,
        isDisabledBtn: true,
      };
    });
  };

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
          <button
            onClick={() => this.handlePlayerAction("+1")}
            disabled={isDisabledBtn}
          >
            +1
          </button>
          <button
            onClick={() => this.handlePlayerAction("-1")}
            disabled={isDisabledBtn}
          >
            -1
          </button>
          <button
            onClick={() => this.handlePlayerAction("×2")}
            disabled={isDisabledBtn}
          >
            ×2
          </button>
          <button
            onClick={() => this.handlePlayerAction("÷2")}
            disabled={isDisabledBtn}
          >
            ÷2
          </button>
        </div>
      </div>
    );
  }
}

export default App;
