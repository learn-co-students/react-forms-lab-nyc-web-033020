import React from "react";

{/* export default class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      counter: props.maxChars
    };
  }

  handleInputChange = (event) => {
    event.persist()
    this.setState(previousState => {
      return {
        counter: previousState.counter - event.target.value.length
      }
    })
  };

  render() {
    // console.log(this.state.maxChars)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.handleInputChange}/>
        <p>{this.state.counter} characters left</p>
      </div>
    );
  }
} */}

// export default TwitterMessage;
 
// maxChars = 280
// Make this a controlled component by adding the attributes to the <input> element.
//// √ add maxChars to state
//// √ add value=this.state.maxChars

export default class TwitterMessage extends React.Component {
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
    let charNumber = this.props.maxChars - this.state.message.length;
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.message}/>
        {charNumber}
      </div>
    );
  }
}