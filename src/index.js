import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import Firebase, { FirebaseContext } from "./components/Firebase";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_URI
});

const Main = () => (
  <ApolloProvider client={client}>
    <FirebaseContext.Provider value={new Firebase()}>
      <App />
    </FirebaseContext.Provider>
  </ApolloProvider>
);

ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
