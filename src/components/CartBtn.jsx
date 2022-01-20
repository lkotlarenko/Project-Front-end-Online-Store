import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartBtn extends Component {
  render() {
    return (
      <Link data-testid="shopping-cart-button" to="/carrinho">Carrinho</Link>
    );
  }
}

export default CartBtn;
