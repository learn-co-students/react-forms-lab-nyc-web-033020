import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  onChangeHandler = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
    console.log(this.state.password)
  }

  onSubmitHandler = event => {
    event.preventDefault()
    if(this.state.username && this.state.password){
      this.props.handleLogin({ 
        username: this.state.username, 
        password: this.state.password 
      })
    }
  }

  render() {

    return (
      <form onSubmit={this.onSubmitHandler}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.onChangeHandler} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.onChangeHandler} />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
