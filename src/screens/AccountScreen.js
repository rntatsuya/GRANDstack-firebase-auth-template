import React from "react";
import { compose } from "recompose";
import {
  AuthUserContext,
  withAuthorization,
  withEmailVerification
} from "../components/Session";
import PasswordForgetForm from "../components/PasswordForgetForm";
import PasswordChangeForm from "../components/PasswordChangeForm";

const AccountScreen = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser; // checking if authUser is null or not

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(AccountScreen);
