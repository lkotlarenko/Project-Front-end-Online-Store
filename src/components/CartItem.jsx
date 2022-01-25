import React, { Component } from 'react';

class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
    };
  }

  updateQuantity = () => {

  }

  render() {
    const { item: { price, title, thumbnail, id } } = this.props;
    const { quantity } = this.state;
    return (
      <div key={ id }>
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <img src={ thumbnail } alt={ title } width="150px" />
        <h4>{ price }</h4>
        <p data-testid="shopping-cart-product-quantity">{ quantity }</p>
        <section id={ id }>
          <button
            name="sum"
            data-testid="product-increase-quantity"
            type="button"
            onClick={ this.updateQuantity }
          >
            +
          </button>
          <button
            name="sub"
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ this.updateQuantity }
          >
            -
          </button>
        </section>
      </div>
    );
  }
}

CartItem.propTypes = {
  
}.isRequired;

export default CartItem;
