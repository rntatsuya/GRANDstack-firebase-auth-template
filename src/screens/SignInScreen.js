import React from "react";
import SignInForm from "../components/SignInForm";
import PasswordForgetLink from "../components/PasswordForgetLink";
import SignUpLink from "../components/SignUpLink";
import SignInGoogle from "../components/SignInGoogle";

const SignInScreen = () => (
  <div>
    <h1>SignIn</h1>
    <SignInForm />
    <SignInGoogle />
    {/* <SignInFacebook /> */}
    <PasswordForgetLink />
    <SignUpLink />
  </div>
);

export default SignInScreen;
