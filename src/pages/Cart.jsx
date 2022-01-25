import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import getProducts from '../services/localHandler';
import CartItem from '../components/CartItem';

class Cart extends Component {
  render() {
    const shoppingCart = getProducts();
    const emptyCart = (
      <h2 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h2>
    );

    return (
      <section>
        <Link to="/">Home</Link>
        {shoppingCart.length === 0 ? emptyCart
          : shoppingCart.map((item) => <CartItem key={ item.id } data={ item } />)}
      </section>
    );
  }
}

export default Cart;
