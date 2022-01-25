import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CartItem extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 1,
    };
  }

  updateQuantity = ({ target }) => {
    const { quantity } = this.state;
    const operator = target.name;
    if (operator === 'sum') {
      this.setState({ quantity: quantity + 1 });
    } else if (operator === 'sub') {
      if (quantity > 0) {
        this.setState({ quantity: quantity - 1 });
      } else {
        this.setState({ quantity: 0 });
      }
    }
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
  data: PropTypes.object,
}.isRequired;

export default CartItem;
