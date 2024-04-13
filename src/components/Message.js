import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome Vistor",
    };
  }
  changeMessage() {
    this.setState({
      message: "Thanku for ting ting",
    });
  }
  render() {
    return (
      <div>
        {" "}
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Nekku</button>
      </div>
    );
  }
}
export default Message;
