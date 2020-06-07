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
    let charNumber = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          id="message"  
          type="text" 
          name="message" 
          onChange={this.handleChange}
          value={this.state.message}
        />
        <h4>Remaining Characters: {charNumber}</h4>
      </div>
    );
  }
}

export default TwitterMessage;
