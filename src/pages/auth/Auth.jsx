import React from 'react';
import SignIn from '../../components/auth/SignIn';
import SignUp from '../../components/signup/SignUp';

import './Auth.styles.scss';

const Auth = () => {
    return (
        <div className="auth">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default Auth
