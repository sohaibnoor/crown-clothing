import React from 'react';
import Signin from './signin/Signin';
import Signup from './signup/Signup';
import './SigninAndSignup.scss';

const SigninAndSignup = () => {
  return (
    <div className="sign-in-and-sign-up">
      <Signin />
      <Signup />
    </div>
  );
};

export default SigninAndSignup;
