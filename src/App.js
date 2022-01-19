import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/';
import { Home } from './components/Home';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
