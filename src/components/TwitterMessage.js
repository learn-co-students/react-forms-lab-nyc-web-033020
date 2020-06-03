import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleInput = event =>{
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let remainingCharactersLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleInput} value={this.state.message} name="message" id="message" />
        {remainingCharactersLeft}
      </div>
    );
  }
}

export default TwitterMessage;
