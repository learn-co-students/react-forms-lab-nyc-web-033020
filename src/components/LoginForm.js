import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
    };
  }

	handleInputChange = event => {
		if ( event.target.id === 'username' ){
			this.setState({
				username: event.target.value,
			})
		} else {
			this.setState({
				password: event.target.value,
			})
		}
	}

  handleSubmit = event => {
	event.preventDefault();
	if ( this.state.username && this.state.password ) {
		this.props.handleLogin(this.state)
	}
  }

  render() {
    return (
      <form>

        <div>
          <label>
            Username
            <input 
              id="username"
              name="username" 
              type="text" 
              onChange={this.handleInputChange} 
              value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
            	id="password" 
              	name="password" 
              	type="password" 
              	onChange = {this.handleInputChange}	
              	value={this.state.password}
              />
          </label>
        </div>
        <div>
          <button type="submit" onClick={this.handleSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
