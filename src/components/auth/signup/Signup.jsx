import React, { Component } from 'react';

class Signin extends Component {
  state = {
    email: '',
    password: ''
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({ email: '', password: '' });
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  };
  render() {
    const { email, password } = this.state;
    return (
      <div className="form">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.onChange}
          />
          <label htmlFor="password">Enter your password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.onChange}
          />
          <input type="submit" value="signin" />
        </form>
      </div>
    );
  }
}

export default Signin;
