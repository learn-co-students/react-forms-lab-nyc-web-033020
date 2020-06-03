import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
		value: ''
    };
  }

	handleChange = event => {
		this.setState({
			value: event.target.value,
		})
	}

	remainingChars = () => {
		return this.props.maxChars - this.state.value.length
	}
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input maxLength={this.props.maxChars} value={this.state.value} onChange={this.handleChange} type="text" name="message" id="message" />
          <p>{this.remainingChars()}<strong> Remaining</strong></p>
      </div>
    );
  }
}

export default TwitterMessage;
