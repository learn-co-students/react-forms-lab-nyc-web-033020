import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
    };
  }

  changeField = (event) => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  };

  submitForm = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      return this.props.handleLogin(this.state);
    }
  };

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input
              onChange={this.changeField}
              id="username"
              name="username"
              type="text"
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={this.changeField}
              id="password"
              name="password"
              type="password"
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
