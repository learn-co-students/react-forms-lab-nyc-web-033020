import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    // console.log('twitter message', this.state.message)
    // console.log(this.props.maxChars)
    let remainingCharacters = this.props.maxChars - this.state.message.length
    console.log(remainingCharacters)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message}
                           onChange={this.handleChange}
        name="message" id="message" />
        {remainingCharacters}
      </div>
    );
  }
}

export default TwitterMessage;
