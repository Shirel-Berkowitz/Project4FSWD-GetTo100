import React, { Component } from "react";
class BoardPlayer extends Component {
  constructor(props) {
    super(props);
    this.formatActions = this.formatActions.bind(this);
  }

  formatActions() {
    return (
      <div className="actionBtns">
        <button onClick={() => this.props.handlePlayerAction("+1")}>+1</button>
        <button onClick={() => this.props.handlePlayerAction("-1")}>-1</button>
        <button onClick={() => this.props.handlePlayerAction("×2")}>×2</button>
        <button onClick={() => this.props.handlePlayerAction("÷2")}>÷2</button>
      </div>
    );
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
          {this.formatActions()}
        </div>
      </div>
    );
  }
}

export default BoardPlayer;
