import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Card extends Component {
  render() {
    const { product, addToCart } = this.props;
    const { price, title, thumbnail, id } = product;
    return (
      <div data-testid="product" id={ id }>
        <h3>{title}</h3>
        <img src={ thumbnail } alt={ title } width="150px" />
        <h4>{ price }</h4>
        <Link
          to={ `/item/${id}` }
          data-testid="product-detail-link"
        >
          Mais detalhes
        </Link>
        <button
          onClick={ () => addToCart(product) }
          type="button"
          data-testid="product-add-to-cart"
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  product: PropTypes.array,
  addToCart: PropTypes.func,
}.isRequired;

export default Card;
