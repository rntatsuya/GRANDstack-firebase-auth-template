import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { compose } from "recompose";

import { withFirebase } from "../components/Firebase";
import {
  withAuthorization,
  withEmailVerification
} from "../components/Session";
import * as ROLES from "../constants/roles";
import * as ROUTES from "../constants/routes";
import UserItem from "../components/UserItem";
import UserList from "../components/UserList";
import PathNotFoundScreen from "./PathNotFoundScreen";

const AdminScreen = () => (
  <div>
    <h1>Admin</h1>

    <p>The Admin Page is accessible by every signed in admin user.</p>

    <Switch>
      <Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem} />
      <Route exact path={ROUTES.ADMIN} component={UserList} />
      <Route component={PathNotFoundScreen} />
    </Switch>
  </div>
);

const condition = authUser => authUser && authUser.roles.includes(ROLES.ADMIN);

export default compose(
  withEmailVerification,
  withAuthorization(condition),
  withFirebase
)(AdminScreen);
