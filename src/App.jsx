import React, { Component } from "react";
import "./App.css";
import BoardPlayer from "./components/BoardPlayer";

class App extends Component {
  constructor(props) {
    super(props);
    this.handlePlayerAction = this.handlePlayerAction.bind(this);
    this.updateTop3 = this.updateTop3.bind(this);
  }

  handlePlayerAction(value) {
    let allPlayers = this.props.allplayers;
    let updateP = allPlayers[this.props.turn];
    let tempSteps = updateP.steps;
    let number = updateP.count;
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
    updateP.count = newValue;
    updateP.steps = tempSteps;
    if (newValue === 100) {
      console.log(updateP);
      this.props.updateWinnerScore(updateP);
    } else {
      this.props.nextTurn(updateP);
    }
  }

  updateTop3() {
    let top3 = this.props.updateTop3();
    //דרך למיין את 3 השחקנים:
    //לעשות push לשחקן האחרון שניצח, למיין, ואז להוציא את השחקן במיקום ה3
    //לפני שמכניסים שחקן חדש - יש לבדוק האם השם שלו כבר רשום בשיאים - ואם כן, לעדכן את החדש ואז למיין את שלושתם.
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
