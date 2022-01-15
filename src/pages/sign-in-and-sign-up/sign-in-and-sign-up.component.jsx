import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import { SigninSignupCont } from './sign-in-and-sign-up.styles';

const SignInAndSignUpPage = () => (
    <SigninSignupCont>
        <SignIn />
        <SignUp />
    </SigninSignupCont>
);

export default SignInAndSignUpPage;