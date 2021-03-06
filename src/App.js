import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Document from './Document';
import Artboard from './Artboard';
import './App.css';

const client = new ApolloClient({
  uri: "https://graphql.sketch.cloud/api"
});

function App() {
  return (
    <div className="app">
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Document />
            </Route>
            <Route path="/:id" children={<Artboard />} />
          </Switch>
        </Router>
      </ApolloProvider>
    </div>
  );
}

export default App;
