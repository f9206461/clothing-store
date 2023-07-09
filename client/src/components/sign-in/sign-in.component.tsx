import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";

import { SignInCont, Title, ButtonsCont } from './sign-in.styles';

interface Props {
    googleSignInStart: () => void;
    emailSignInStart: (email: string, password: string) => void;
}

const SignIn = ({ googleSignInStart, emailSignInStart }: Props) => {
    // React Hooks
    const [userCredentials, setCredentials] = useState({ 
        email: '', 
        password: '' 
    });

    const { email, password } = userCredentials;
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials, [name]: value });
    }


    return(
        <SignInCont>
            <Title>I already have an account</Title>
            <span>Sign in with your email and password.</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    type="email" 
                    name="email" 
                    value={email} 
                    handleChange={handleChange}
                    label="email"
                    required 
                />
                <FormInput 
                    type="password" 
                    name="password" 
                    value={password} 
                    handleChange={handleChange}
                    label="password"
                    required 
                />
                <ButtonsCont>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                </ButtonsCont>
            </form>
        </SignInCont>
    )
}

const mapDispatchToProps = (dispatch: (action: any) => void) => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email: string, password: string) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);