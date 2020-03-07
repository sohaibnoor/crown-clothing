import React, { Component } from 'react';
import FormInput from '../../FormInput/FormInput';
import CustomButton from '../../CustomButtom/CustomButton';

import { auth, createUserProfileDocument } from '../../../firebase/utils';

import './Signup.scss';

class Signup extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  onSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  };
  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2 className="title">I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.onSubmit}>
          <FormInput
            type="text"
            name="displayName"
            onChange={this.onChange}
            value={displayName}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.onChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.onChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.onChange}
            label="Confirm Password"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default Signup;
