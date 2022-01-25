import React, { Component } from 'react';

export class CartItem extends Component {
  constructor(props) {
    super();
    const initialQuantity = props.item.order_backend - 1;
    this.state = {
      quantity: initialQuantity,
    };
  }

  callUpdate(item, operation) {
    const { updateContent } = this.props;
    const { quantity } = this.state;
    updateContent(item, operation, quantity);
    if (operation === '+') {
      this.setState((prevState) => ({
        quantity: prevState.quantity += 1,
      }));
    }
  }

  render() {
    const { item: { price, title, thumbnail, id }, updateContent } = this.props;
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
            onClick={ () => callUpdate(item, '+') }
          >
            +
          </button>
          <button
            name="sub"
            data-testid="product-decrease-quantity"
            type="button"
            onClick={ () => callUpdate(item, '-') }
          >
            -
          </button>
        </section>
      </div>
    );
  }
}

export default CartItem;
