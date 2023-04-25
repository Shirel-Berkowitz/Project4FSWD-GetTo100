import React, { Component } from "react";
import "./App.css";
import BoardPlayer from "./components/BoardPlayer";

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePlayerAction = this.handlePlayerAction.bind(this);
    this.updateTop3 = this.updateTop3.bind(this);
  }

  addLastPlayer(name) {
    const newPlayer = {
      id: this.state.nextPlayerId,
      name: name,
      score: [],
    };
    //console.log(`Adding player ${this.state.username}`);
    this.setState((prevState) => ({
      isVisibleSignUpDiv: !prevState.isVisibleSignUpDiv,
    }));
    //adding players
    this.setState((prevState) => ({
      nextPlayerId: this.state.nextPlayerId + 1,
      players: [...prevState.players, newPlayer],
    }));
  }

  handlePlayerAction(value) {
    let allPlayers = this.props.allplayers;
    let updatePlayer = allPlayers[this.props.turn];
    let tempSteps = updatePlayer.steps;
    let number = updatePlayer.count;
    let newValue;

    if (value === "×2") {
      newValue = number * 2;
    } else if (value === "÷2") {
      newValue = Math.floor(number / 2);
    } else if (value === "+1") {
      newValue = number + 1;
    } else if (value === "-1") {
      newValue = number - 1;
    }
    tempSteps = tempSteps + 1;
    //this.setState({steps: this.state.steps + 1})
    updatePlayer.count = newValue;
    updatePlayer.steps = tempSteps;

    this.props.nextTurn(updatePlayer);
  }

  updateTop3() {
    let top3 = this.props.updateTop3();
    return (
      <div>
        <h2>Top 3 Winners:</h2>
        <ul>
          {top3.map((player) => (
            <li key={player.pid}>
              {player.name} ({player.score.length} wins)
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const players = this.props.allplayers;
    return (
      <div>
        {this.updateTop3()}
        {players.map((player, i) => (
          <BoardPlayer
            key={i}
            thisPlayer={player}
            turn={this.props.turn}
            handlePlayerAction={this.handlePlayerAction}
            steps={player.steps}
            winnerNewGame={this.props.winnerNewGame}
            winnerQuitGame={this.props.winnerQuitGame}
            updateWinnerScore={this.props.updateWinnerScore}
            goToPlay={this.props.goToPlay}
          />
        ))}
      </div>
    );
  }
}

export default App;
