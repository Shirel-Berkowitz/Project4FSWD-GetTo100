import React, { Component } from "react";
import "./App.css";
import BoardPlayer from "./components/BoardPlayer";

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePlayerAction = this.handlePlayerAction.bind(this);
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
    //תוסיפי תנאי שאם זה לא תורך אתה לא יכול ללחוץ
    let allPlayers = this.props.allplayers;
    let updatePlayer = allPlayers[this.props.turn];
    let tempSteps = updatePlayer.steps;
    let number = updatePlayer.count;
    let newValue;
    // for (let i = o; i < allPlayers.length; i++) {
    //   if (allPlayers[i].thisPlayer.id != this.props.turn.id) {
    //     //this.props.App.
    //   }
    // }

    if (value === "×2") {
      newValue = number * 2;
    } else if (value === "÷2") {
      newValue = Math.floor(number / 2);
    } else if (value === "+1") {
      newValue = number + 1;
    } else if (value === "-1") {
      newValue = number - 1;
    }
    console.log("new value", newValue);
    tempSteps = tempSteps + 1;
    //this.setState({steps: this.state.steps + 1})
    updatePlayer.count = newValue;
    updatePlayer.steps = tempSteps;

    this.props.nextTurn(updatePlayer);
  }

  render() {
    const players = this.props.allplayers;
    return (
      <div>
        {players.map((player, i) => (
          <BoardPlayer
            key={i}
            thisPlayer={player}
            turn={this.props.turn}
            handlePlayerAction={this.handlePlayerAction}
            steps={player.steps}
          />
        ))}
      </div>
    );
  }
}

export default App;
