import React, { Component } from "react";
import App from "./App";

let PlayerId = -1;
class StartWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startGame: false,
      players: [],
      currentPlayer: 0,
      gameOver: false,
      inputValue: "",
      disabled: true,
      top3: [],
    };

    //bind functions
    this.addNewPlayer = this.addNewPlayer.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.goToPlay = this.goToPlay.bind(this);
    this.nextTurn = this.nextTurn.bind(this);
    this.winnerQuitGame = this.winnerQuitGame.bind(this);
    this.updateWinnerScore = this.updateWinnerScore.bind(this);
    this.updateTop3 = this.updateTop3.bind(this);
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
      wins: 0,
      score: [],
      count: Math.floor(Math.random() * 100),
      steps: 0,
    };

    let update = this.state.players;
    update.push(newPlayer);
    this.setState({
      players: update,
      inputValue: "",
      currentPlayer: this.state.currentPlayer + 1,
    });
    console.log(
      `current player: ${this.state.players[this.state.currentPlayer].name}`
    );
  }

  goToPlay() {
    //console.log("go to play");
    let updatePlayers = this.state.players;
    for (let i = 0; i < updatePlayers.length; i++) {
      updatePlayers[i].steps = 0;
      updatePlayers[i].count = Math.floor(Math.random() * 100);
    }
    this.setState({
      startGame: true,
      currentPlayer: 0,
      players: updatePlayers,
    });
  }

  winnerQuitGame(winner) {
    //remove player from players array
    let newPlayers = this.state.players.filter(
      (item) => item.pid !== winner.pid //target.value
    );
    for (let i = 0; i < newPlayers.length; i++) {
      newPlayers[i].pid = i;
    }

    this.setState({ players: newPlayers, currentPlayer: 0 });
  }

  //לבדוק למה לא עובד
  //update array of scores and increase the number of wins
  updateWinnerScore(winner) {
    let updatedPlayersArr = this.state.players;
    for (let i = 0; i < updatedPlayersArr.length; i++) {
      if (updatedPlayersArr[i].pid === winner.pid) {
        updatedPlayersArr[i].score.push(winner.steps);
      }
    }
    //יש לאפס את כל הsteps של השחקנים
    this.setState({
      players: updatedPlayersArr,
      wins: this.state.wins + 1,
    });
  }

  nextTurn(updateP) {
    let updatePlayers = [...this.state.players];
    updatePlayers[this.state.currentPlayer] = updateP;
    let tempTurn = this.state.currentPlayer + 1;
    let nextT = tempTurn % this.state.players.length;
    this.setState({ currentPlayer: nextT, players: updatePlayers });
  }

  updateTop3() {
    let players = this.state.players.slice();
    players.sort((a, b) => {
      return b.wins - a.wins;
    });
    return players.slice(0, 3);
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
            Add player
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
        winnerQuitGame={this.winnerQuitGame}
        updateWinnerScore={this.updateWinnerScore}
        goToPlay={this.goToPlay}
        updateTop3={this.updateTop3}
      />
    );
  }
}
export default StartWindow;
