import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { withAuthentication } from "./components/Session";
import Navigation from "./components/Navigation";
import LandingScreen from "./screens/LandingScreen";

import * as ROUTES from "./constants/routes";
import SignUpScreen from "./screens/SignUpScreen";
import SignInScreen from "./screens/SignInScreen";
import PasswordForgetScreen from "./screens/PasswordForgetScreen";
import AccountScreen from "./screens/AccountScreen";
import AdminScreen from "./screens/AdminScreen";

// class App extends Component {
//   render() {
//     return (
//       <AuthUserContext.Provider value={this.state.authUser}>
//         <Router>
//           <Navigation />

//           <hr />

//           <Route exact path={ROUTES.LANDING} component={LandingScreen} />
//           <Route exact path={ROUTES.SIGN_UP} component={SignUpScreen} />
//           <Route exact path={ROUTES.SIGN_IN} component={SignInScreen} />
//         </Router>
//       </AuthUserContext.Provider>
//     );
//   }
// }

// export default withFirebase(App);

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingScreen} />
      <Route exact path={ROUTES.SIGN_UP} component={SignUpScreen} />
      <Route exact path={ROUTES.SIGN_IN} component={SignInScreen} />
      <Route
        exact
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetScreen}
      />
      <Route exact path={ROUTES.ACCOUNT} component={AccountScreen} />
      <Route exact path={ROUTES.ADMIN} component={AdminScreen} />
    </div>
  </Router>
);

export default withAuthentication(App);
