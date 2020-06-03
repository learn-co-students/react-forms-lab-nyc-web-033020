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

export default TwitterMessage;

//// Working code below but character tests not passing

// import React from "react";

// class TwitterMessage extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       message: ''
//     };
//   }

//   messageChange = e => {
//     this.setState({
//       message: e.target.value
//     })
//   }

//   render() {
//     return (
//       <div>
//         <strong>Your message:</strong>
//         <input onChange={this.messageChange} value={this.state.message} type="text" name="message" id="message" />
//         <span>{`${this.props.maxChars - (this.state.message.length)} characters left`}</span>
//       </div>
      
//     );
//   }
// }

// export default TwitterMessage;
