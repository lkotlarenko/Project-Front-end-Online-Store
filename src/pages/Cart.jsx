import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Cart extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     shoppingCart: [],
  //   };
  // }

  // componentDidMount() {
  //   this.getCart();
  // }

  // componentDidUpdate() {
  //   this.getCart();
  // }

  // getCart = () => {
  //   const { shoppingCart } = this.props;
  //   this.setState({
  //     shoppingCart,
  //   });
  // }

  render() {
    const { shoppingCart } = this.props;
    const emptyCart = (
      <h2 data-testid="shopping-cart-empty-message">
        Seu carrinho está vazio
      </h2>
    );
    return (
      <section>
        <Link to="/">Home</Link>
        {shoppingCart.length === 0 ? emptyCart : shoppingCart.map((item) => {
          const { price, title, thumbnail, id, order_backend } = item;
          const { updateContent } = this.props;
          return (
            <div key={ id }>
              <h3 data-testid="shopping-cart-product-name">{title}</h3>
              <img src={ thumbnail } alt={ title } width="150px" />
              <h4>{ price }</h4>
              <p data-testid="shopping-cart-product-quantity">{ order_backend }</p>
              <section id={ id }>
                <button
                  name="sum"
                  data-testid="product-increase-quantity"
                  type="button"
                  onClick={ () => updateContent(item, '+') }
                >
                  +
                </button>
                <button
                  name="sub"
                  data-testid="product-decrease-quantity"
                  type="button"
                  onClick={ () => updateContent(item, '-') }
                >
                  -
                </button>
              </section>
            </div>
          );
        })}
      </section>
    );
  }
}

Cart.propTypes = {
  shoppingCart: PropTypes.array,
}.isRequired;

export default Cart;
