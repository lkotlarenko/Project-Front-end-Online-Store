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

  updateContent = (item, operation) => {
    const { cartItems } = this.state;
    const validatQantit = cartItems.find((product) => product.id === item.id);
    if (validatQantit) {
      if (operation === '+') {
        validatQantit.order_backend += 1;
      } else {
        validatQantit.order_backend -= 1;
      }
    }
  }

  addCart = (product) => {
    const { cartItems } = this.state;
    const validatQantit = cartItems.find((item) => item.id === product.id);
    if (validatQantit) {
      validatQantit.order_backend += 1;
    } else {
      this.setState((prevState) => ({
        cartItems: [...prevState.cartItems, product],
      }));
    }
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
            render={ () => (
              <Cart
                updateContent={ this.updateContent }
                shoppingCart={ cartItems }
              />) }
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
