import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/';
import Cart from './pages/Cart';
import { Home } from './pages/Home';

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/carrinho" component={ Cart } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
