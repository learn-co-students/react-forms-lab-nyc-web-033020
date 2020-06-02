import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)

    this.state = {
      message: "",
      remainingCharacters: this.props.maxChars,
    };
  }

  onChange = (event) => {
    this.setState({
      message: event.target.value,
      remainingCharacters: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>Remaining characters: {this.state.remainingCharacters}</p>
        <input
          type="text" 
          name="message" 
          id="message" 
          onChange={this.onChange}  
          value={this.state.message}
        />
      </div>
    );
  }
}

export default TwitterMessage;
