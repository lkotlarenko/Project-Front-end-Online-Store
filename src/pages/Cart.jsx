import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as localHandler from '../services/localHandler';
import CartItem from '../components/CartItem';

class Cart extends Component {
  refreshComponent = () => {
    // https://www.educative.io/edpresso/how-to-force-a-react-component-to-re-render
    this.forceUpdate();
  }

  render() {
    // TODO: filter shopping cart to only 1 item per id
    const shoppingCart = localHandler.getProducts();
    const emptyCart = (
      <h2 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h2>
    );

    return (
      <section>
        <Link to="/">Home</Link>
        {shoppingCart.length === 0 ? emptyCart
          : shoppingCart.map((item) => (
            <CartItem
              key={ item.id }
              data={ item }
              refresh={ this.refreshComponent }
            />))}
      </section>
    );
  }
}

export default Cart;
