import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleOnChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    console.log(this.state)
    let charNumber = this.props.maxChars  - this.state.message.length
 
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleOnChange(event)} type="text" name='message' id='message' value={this.state.message}/>
        <p>{charNumber} characters left</p>
        <button>Submit Post</button>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default TwitterMessage;
