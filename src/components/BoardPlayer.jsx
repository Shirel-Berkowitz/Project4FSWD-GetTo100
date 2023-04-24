import React, { Component } from "react";

class BoardPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: true,
    };
    this.formatActions = this.formatActions.bind(this);
    this.winningActions = this.winningActions.bind(this);
  }

  formatActions() {
    return (
      <div
        className="actionBtns"
        disabled={
          this.props.thisPlayer.pid === this.props.turn
            ? (this.state.disabled = false)
            : (this.state.disabled = true)
        }
      >
        <button onClick={() => this.props.handlePlayerAction("+1")}>+1</button>
        <button onClick={() => this.props.handlePlayerAction("-1")}>-1</button>
        <button onClick={() => this.props.handlePlayerAction("×2")}>×2</button>
        <button onClick={() => this.props.handlePlayerAction("÷2")}>÷2</button>
      </div>
    );
  }
  //buttons that shows up to the winner
  winningActions() {
    //show buttons only if won
    if (this.props.thisPlayer.count === 100) {
      return (
        <div className="WinningBtns">
          <button onClick={() => this.props.newGameToWinner()}>New game</button>
          <button onClick={() => this.props.winnerQuitGame()}>Quit</button>
        </div>
      );
    }
    return;
  }
  render() {
    let player = this.props.thisPlayer;
    return (
      <div>
        <div className="App">
          <h2>User: {player.name}</h2>
          <h4>{player.pid === this.props.turn ? "Enabled!" : "Disabled"}</h4>
          <h2>{player.count}</h2>
          <h3>steps: {this.props.steps}</h3>
          <h4>{player.count === 100 ? "You won!" : ""}</h4>
          {this.winningActions()}
          {this.formatActions()}
        </div>
      </div>
    );
  }
}

export default BoardPlayer;
