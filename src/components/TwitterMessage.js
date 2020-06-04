import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      charCount: 0
    };
  }

  onChangeHandler = event => {
    const newCharCount = this.state.charCount + 1
    const textValue = this.state.text
    this.setState({
      text: event.target.value,
      charCount: newCharCount
    })
    console.log(this.state.text)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.onChangeHandler} value={this.state.text} />
        <p>{280 - this.state.charCount} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
