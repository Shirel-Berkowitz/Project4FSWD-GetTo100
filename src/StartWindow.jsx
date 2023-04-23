import React, { Component } from "react";
import App from "./App";

let PlayerId = -1;
class StartWindow extends Component {
  constructor(props) {
    super(props);
    //bind functions
    this.addNewPlayer = this.addNewPlayer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.goToPlay = this.goToPlay.bind(this);
    this.nextTurn = this.nextTurn.bind(this);

    this.state = {
      startGame: false,
      players: [],
      currentPlayer: 0,
      gameOver: false,
      inputValue: "",
      disabled: true,
    };
  }
  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  //add a new player to the array of players
  addNewPlayer(username) {
    this.setState({ disabled: false });
    const newPlayer = {
      pid: ++PlayerId,
      name: username,
      score: [],
      count: Math.floor(Math.random() * 100),
      steps: 0,
    };

    console.log(`Adding player ${this.state.username}`);
    /*this.setState((prevState) => ({
        players: [...prevState.players, newPlayer],
        }));*/
    let update = this.state.players;
    update.push(newPlayer);
    this.setState({ players: update, inputValue: "" });
  }

  goToPlay() {
    this.setState({ startGame: true });
  }
  nextTurn(updateP) {
    let updatePlayers = [...this.state.players];
    updateP[this.state.currentPlayer] = updateP;
    let tempTurn = this.state.currentPlayer + 1;
    let nextT = tempTurn % this.state.players.length;

    this.setState({ currentPlayer: nextT, players: updatePlayers });
  }

  render() {
    return this.state.startGame === false ? (
      <div>
        <h1>Get to 100!</h1>
        <div className="Sign-up">
          <h2>Hello!</h2>
          <h2>Please enter your name:</h2>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          ></input>
          <br></br>
          <button onClick={() => this.addNewPlayer(this.state.inputValue)}>
            Add another player
          </button>
          <button
            id="goToPlayBtn"
            disabled={this.state.disabled}
            onClick={() => this.goToPlay()}
          >
            let's play!
          </button>
        </div>
      </div>
    ) : (
      <App
        allplayers={this.state.players}
        turn={this.state.currentPlayer}
        nextTurn={this.nextTurn}
      />
    );
  }
}
export default StartWindow;
