import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom/';
import Cart from './pages/Cart';
import { Home } from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import saveProduct from './services/localHandler';

export class App extends Component {

  addCart = (product) => {
    saveProduct(product);
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/item/:id"
            component={ <ProductDetail /> }
          />
          <Route
            exact
            path="/carrinho"
            component={ <Cart /> }
          />
          <Route
            exact
            path="/"
            render={ () => <Home cartHandler={ this.addCart } /> }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
