import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CartItem from '../components/CartItem';

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
          const { updateContent } = this.props;
          return (
            <CartItem key={ item.id } updateContent={ updateContent } data={ item } />
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
