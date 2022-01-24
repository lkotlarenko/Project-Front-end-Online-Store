import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/';
import Cart from './pages/Cart';
import { Home } from './pages/Home';
import ProductDetail from './pages/ProductDetail';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  addCart = (product) => {
    this.setState((prevState) => ({
      cartItems: [...prevState.cartItems, product],
    }));
  }

  render() {
    const { cartItems } = this.state;
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/item/:id"
            render={ () => <ProductDetail shoppingCart={ this.addCart } /> }
          />
          <Route
            exact
            path="/carrinho"
            render={ () => <Cart shoppingCart={ cartItems } /> }
          />
          <Route
            exact
            path="/"
            render={ () => <Home callback={ this.addCart } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
