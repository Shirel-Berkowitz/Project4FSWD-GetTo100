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
      isVisibleSignUpDiv: true,
      isDisabledBtn: false,
      players: [
        { name: "Shirel", score: 0 },
        { name: "Ori", score: 0 },
      ],
      currentPlayerIndex: 0,
      gameOver: false,
    };
    this.handlePlayerAction = this.handlePlayerAction.bind(this);
  }

  //add a new player to the array of players
  addNewPlayer(name) {
    const newPlayer = {
      name: name,
      score: 0,
    };
    console.log(`Adding player ${this.state.username}`);
    this.setState((prevState) => ({
      players: [...prevState.players, newPlayer],
    }));
  }

  //add a new player to the array of players
  addLastPlayer(name) {
    const newPlayer = {
      name: name,
      score: 0,
    };
    console.log(`Adding player ${this.state.username}`);
    this.setState((prevState) => ({
      isVisibleSignUpDiv: !prevState.isVisibleSignUpDiv,
    }));
    this.setState((prevState) => ({
      players: [...prevState.players, newPlayer],
    }));
  }

  handleInputChange = (event) => {
    this.setState({ username: event.target.value });
  };

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

  render() {
    const { isDisabledBtn } = this.state;
    return (
      <div>
        <h1>Get to 100!</h1>
        <div
          className="Sign-up"
          style={{ display: this.state.isVisibleSignUpDiv ? "block" : "none" }}
        >
          <h2>Hello!</h2>
          <h2>Please enter your name:</h2>
          <input type="text" onChange={this.handleInputChange}></input>
          <br></br>
          <button onClick={() => this.addNewPlayer(this.state.username)}>
            Add another player
          </button>
          <button onClick={() => this.addLastPlayer(this.state.username)}>
            Done, let's play!
          </button>
        </div>

        <div
          className="App"
          style={{ display: this.state.isVisibleSignUpDiv ? "none" : "block" }}
        >
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
      </div>
    );
  }
}

export default App;
