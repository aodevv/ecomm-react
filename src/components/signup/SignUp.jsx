import React, { Component, useState } from 'react';
import { connect } from "react-redux";

import FormInput from '../form-input/FormInput';
import CustomButton from '../buttons/CustomButton';

import { signUpStart } from '../../redux/user/user.actions'

import './SignUp.styles.scss';

const SignUp = ({ signUpStart }) => {

    const [userCreds, setCreds] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { displayName, email, password, confirmPassword } = userCreds;

    const handleSubmit = async event => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert(`Password don't match`);
            return;
        }

        signUpStart({ displayName, email, password });

    };

    const handleChange = event => {
        const { name, value } = event.target;

        setCreds({ ...userCreds, [name]: value });
    }

    return (
        <div className="sign-up">
            <h2 className="title">I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name="displayName"
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name="email"
                    value={email}
                    onChange={handleChange}
                    label='Email'
                    required
                />
                <FormInput
                    type='password'
                    name="password"
                    value={password}
                    onChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    label='Condirm Password'
                    required
                />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (userCreds) => dispatch(signUpStart(userCreds))
})

export default connect(null, mapDispatchToProps)(SignUp);

