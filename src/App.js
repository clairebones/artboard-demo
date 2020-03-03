import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Document from './Document';
import './App.css';

const client = new ApolloClient({
  uri: "https://graphql.sketch.cloud/api"
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router className="App">
        <header className="App-header">
          Header
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <Document />
            </Route>
          </Switch>
        </main>
      </Router>
    </ApolloProvider>
  );
}

export default App;
