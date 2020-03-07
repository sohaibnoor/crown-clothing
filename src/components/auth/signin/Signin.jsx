import React, { Component } from 'react';
import './Signin.scss';
import CustomButton from '../../CustomButtom/CustomButton';
import FormInput from '../../FormInput/FormInput';
import { signInWithGoogle } from '../../../firebase/utils';

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
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.onSubmit}>
          <FormInput
            type="email"
            name="email"
            label="EMAIL"
            onChange={this.onChange}
            value={email}
            required
          />
          <FormInput
            type="password"
            name="password"
            label="PASSWORD"
            onChange={this.onChange}
            value={password}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
