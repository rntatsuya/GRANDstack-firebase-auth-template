import React, { Component } from "react";
import { compose } from "recompose";

import { withFirebase } from "../components/Firebase";
import {
  withAuthorization,
  withEmailVerification
} from "../components/Session";
import * as ROLES from "../constants/roles";
import UserList from "../components/UserList";

class AdminScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      users: []
    };
  }

  componentDidMount() {
    this.setState({ loading: true });

    // using the users reference from our Firebase class to attach a listener
    this.props.firebase.users().on(
      "value",
      snapshot => {
        console.log("users listener updting ");

        const usersObject = snapshot.val();

        const usersList = Object.keys(usersObject).map(key => ({
          ...usersObject[key],
          uid: key
        }));

        this.setState({
          users: usersList,
          loading: false
        });
      },
      errorObject => {
        console.log("The read failed: " + errorObject.code);
      }
    );
  }

  componentWillUnmount() {
    this.props.firebase.users().off();
  }

  render() {
    const { users, loading } = this.state;

    return (
      <div>
        <h1>Admin</h1>

        <p>The Admin Page is accessible by every signed in admin user.</p>

        {loading && <div>Loading ...</div>}

        <UserList users={users} />
      </div>
    );
  }
}

const condition = authUser => authUser && authUser.roles.includes(ROLES.ADMIN);

export default compose(
  withEmailVerification,
  withAuthorization(condition),
  withFirebase
)(AdminScreen);
