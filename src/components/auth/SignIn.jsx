import React, { Component, useState } from "react";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../buttons/CustomButton";

import { connect } from "react-redux";

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

import "./SignIn.styles.scss";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCreds, setCreds] = useState({ email: '', password: '' });

  const { email, password } = userCreds;

  const handleSubmit = async (event) => {
    event.preventDefault();

    emailSignInStart(email, password);

  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCreds({ ...userCreds, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          required
          label="email"
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          required
          label="password"
          handleChange={handleChange}
        />
        <div className="btn-group">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn
          >
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
